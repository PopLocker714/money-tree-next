import { unlink } from "node:fs/promises";
import path from "node:path";

export default async function deleteFile(previewImage: string) {
  const imagePath = path.join(process.cwd(), "public", previewImage);

  await unlink(imagePath);
}
