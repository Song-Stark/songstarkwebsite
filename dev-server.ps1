# PowerShell script to run Next.js dev server on port 4000
# Usage: .\dev-server.ps1

# Set the project directory
$projectDir = "S:\SONGSTARK\songstarkwebsite"

# Check if directory exists
if (-Not (Test-Path $projectDir)) {
    Write-Host "Error: Project directory does not exist: $projectDir" -ForegroundColor Red
    exit 1
}

# Change to project directory
Set-Location $projectDir

Write-Host "Starting Next.js dev server on port 4000..." -ForegroundColor Green
Write-Host "Project directory: $projectDir" -ForegroundColor Cyan

# Run the dev server on port 4000
# Using -- to pass arguments to the underlying next command
npm run dev -- -p 4000

