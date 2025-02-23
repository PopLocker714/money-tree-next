import { NextRequest, NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";

export async function GET(request: NextRequest) {
  const pathname = new URL(request.url).searchParams.get("pathname");

  if (!pathname) {
    return NextResponse.json({ error: "Missing pathname" }, { status: 400 });
  }

  const filePath = path.join(process.cwd(), pathname);

  try {
    const file = fs.readFileSync(filePath);
    const ext = path.extname(filePath).toLowerCase();

    let contentType = "application/octet-stream"; // Файл по умолчанию
    if (ext === ".png") contentType = "image/png";
    else if (ext === ".jpg" || ext === ".jpeg") contentType = "image/jpeg";
    else if (ext === ".webp") contentType = "image/webp";

    return new NextResponse(file, {
      headers: { "Content-Type": contentType },
    });
  } catch (e) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }
}
