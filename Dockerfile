# Stage 1: Builder (combines deps and build)
FROM node:20-alpine AS builder
WORKDIR /app

# Force NODE_ENV to development for dependency installation (needed for devDependencies)
# Coolify may set NODE_ENV=production which skips devDependencies
ENV NODE_ENV=development

# Copy package files
COPY package.json package-lock.json* ./

# Install all dependencies including devDependencies
RUN npm ci

# Copy application code
COPY . .

# Set environment variable for build
ENV NEXT_TELEMETRY_DISABLED=1

# Build the application
RUN npm run build

# Stage 2: Runner
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy necessary files from builder
# Copy public folder (if it exists)
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Copy standalone build output
# The standalone output includes server.js and all necessary node_modules
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Set proper permissions
USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Start the Next.js server
# The server.js file is in the standalone output root
CMD ["node", "server.js"]
