import { unlink } from "node:fs/promises";
import path from "node:path";
import supabase from "../supabase/supabase";

export default async function deleteFile(previewImage: string) {
  if (previewImage.includes("https://")) {
    const path = previewImage.replace(
      `${process.env.PROJECT_SUPABASE_URL}/storage/v1/object/public/products/`,
      ""
    );
    const { data } = await supabase.storage.from("products").remove([path]);
    return data;
  } else {
    deleteFileLocal(previewImage);
  }
}

export async function deleteFileLocal(previewImage: string) {
  const imagePath = path.join(
    process.cwd(),
    previewImage.replace("/api/file?pathname=", "")
  );
  await unlink(imagePath);
}
