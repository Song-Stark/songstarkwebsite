// pages/api/upload.ts
import { NextRequest, NextResponse } from "next/server";
import formidable from "formidable";
import fs from "fs";
import path from "path";

// Ensures the uploads directory exists
const uploadDir = path.join(process.cwd(), "public", "uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

export async function POST(request: NextRequest) {
  try {
    // Convert the request to a Node.js readable stream
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json({ message: "No file uploaded" }, { status: 400 });
    }

    // Convert File to Buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Generate unique filename
    const uniqueFilename = `${Date.now()}-${file.name}`;
    const filepath = path.join(uploadDir, uniqueFilename);

    // Write the file
    fs.writeFileSync(filepath, buffer);
    const fileUrl = `/uploads/${uniqueFilename}`;
    
    return NextResponse.json({ 
      message: "File uploaded successfully ✅",
      fileUrl 
    });
  } catch (error) {
    console.error("Error handling file upload:", error);
    return NextResponse.json({ message: "File upload failed ❌" }, { status: 500 });
  }
}
