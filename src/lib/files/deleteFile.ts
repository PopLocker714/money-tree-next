import { unlink } from "node:fs/promises";
import path from "node:path";
import supabase from "../supabase/supabase";

export default async function deleteFile(previewImage: string) {
  const path = previewImage.replace(`${process.env.PROJECT_SUPABASE_URL}/storage/v1/object/public/products/`, "");
  const { data } = await supabase.storage.from("products").remove([path]);
  return data;
}

export async function deleteFileOld(previewImage: string) {
  const imagePath = path.join(process.cwd(), "public", previewImage);

  await unlink(imagePath);
}
