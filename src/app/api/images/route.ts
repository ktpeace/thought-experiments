import { NextResponse } from "next/server";

const fs = require("fs");
const path = require("path");
const { put } = require("@vercel/blob");

const IMAGES_FOLDER = path.resolve(process.cwd(), "experiment-images");

async function uploadImage(filePath: string) {
  const fileName = path.basename(filePath);
  const fileStream = fs.createReadStream(filePath);

  const response = await put(fileName, fileStream, {
    access: "public",
  });

  return response.url;
}

async function uploadAllImages() {
  const files = fs.readdirSync(IMAGES_FOLDER);
  const imageUrls = [];

  for (const file of files) {
    const filePath = path.join(IMAGES_FOLDER, file);
    const imageUrl = await uploadImage(filePath);
    console.log(`Uploaded ${file} to ${imageUrl}`);
    imageUrls.push({ fileName: file, url: imageUrl });
  }

  return imageUrls;
}

export async function GET(request: Request) {
  try {
    const urls = await uploadAllImages();
    return NextResponse.json({ message: "success", urls }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
