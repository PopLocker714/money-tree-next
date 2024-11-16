import { randomUUID } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import supabase from "../supabase/supabase";

export default async function saveFile(file: Blob, prefix = "") {
  // const path = previewImage.replace(`https://${process.env.PROJECT_SUPABASE_URL}.supabase.co/storage/v1/object/public/`, "");
  const { data, error } = await supabase.storage.from("products").upload(`${!!prefix ? prefix + "_" : ""}${randomUUID()}`, file);

  if (error) {
    console.log("SAVE FILE ERROR",error);

    return {
      ok: false,
      error: error.message,
      data: {},
    };
  }

  return {
    ok: true,
    error: null,
    data: `${process.env.PROJECT_SUPABASE_URL}/storage/v1/object/public/${data.fullPath}`,
  };
}

export async function saveFileOld(file: Blob, prefix = "") {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const extension = file.type.split("/")[1] || "dat"; // По умолчанию `dat`, если расширение неизвестно

  const fileNameWithExtension = `${!!prefix ? prefix + "_" : ""}${randomUUID()}.${extension}`;

  const dirPath = path.join(process.cwd(), "public", "uploads");
  const filePath = path.join(dirPath, fileNameWithExtension);

  // Создаем директорию, если она не существует
  try {
    await mkdir(dirPath, { recursive: true }); // recursive: true создаст все промежуточные папки
  } catch (e) {
    console.error("Ошибка при создании директории:", e);
    return {
      ok: false,
      error: "Не удалось создать директорию",
      data: {},
    };
  }

  const res = await writeFile(filePath, buffer)
    .then(() => {
      const publicUrl = `/uploads/${fileNameWithExtension}`;
      return {
        ok: true,
        error: null,
        data: publicUrl,
      };
    })
    .catch((e) => {
      console.error("Ошибка при записи файла:", e);
      if (e instanceof Error) {
        return {
          ok: false,
          error: e.message,
          data: {},
        };
      }
      return {
        ok: false,
        error: "Unknown error",
        data: {},
      };
    });

  return res;
}
