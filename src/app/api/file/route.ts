import { NextRequest, NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";

const cache = new Map<string, Buffer>();
const MAX_CACHE_SIZE = 100; // Ограничение кеша
const CACHE_TTL = 10 * 60 * 1000; // 10 минут

const cacheTimestamps = new Map<string, number>();

export async function GET(request: NextRequest) {
  const pathname = new URL(request.url).searchParams.get("pathname");

  if (!pathname) {
    return NextResponse.json({ error: "Missing pathname" }, { status: 400 });
  }

  const filePath = path.join(process.cwd(), pathname);

  try {
    if (cache.has(filePath)) {
      cacheTimestamps.set(filePath, Date.now()); // Обновляем время доступа
      return new NextResponse(cache.get(filePath)!, {
        headers: { "Content-Type": getContentType(filePath) },
      });
    }

    const file = await fs.readFile(filePath);
    addToCache(filePath, file);

    return new NextResponse(file, {
      headers: { "Content-Type": getContentType(filePath) },
    });
  } catch (e) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }
}

function getContentType(filePath: string): string {
  const ext = path.extname(filePath).toLowerCase();
  switch (ext) {
    case ".png":
      return "image/png";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".webp":
      return "image/webp";
    default:
      return "application/octet-stream";
  }
}

function addToCache(filePath: string, file: Buffer) {
  if (cache.size >= MAX_CACHE_SIZE) {
    removeOldestCacheItem();
  }
  cache.set(filePath, file);
  cacheTimestamps.set(filePath, Date.now());
}

function removeOldestCacheItem() {
  let oldestKey: string | null = null;
  let oldestTime = Infinity;

  for (const [key, time] of cacheTimestamps.entries()) {
    if (time < oldestTime) {
      oldestTime = time;
      oldestKey = key;
    }
  }

  if (oldestKey) {
    cache.delete(oldestKey);
    cacheTimestamps.delete(oldestKey);
  }
}

// Очищаем кеш каждые 10 минут
setInterval(() => {
  const now = Date.now();
  for (const [key, time] of cacheTimestamps.entries()) {
    if (now - time > CACHE_TTL) {
      cache.delete(key);
      cacheTimestamps.delete(key);
    }
  }
}, CACHE_TTL);
