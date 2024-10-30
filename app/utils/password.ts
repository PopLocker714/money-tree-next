import { pbkdf2Sync, randomBytes, timingSafeEqual } from "node:crypto";

function hashPassword(password: string): { salt: string; hash: string } {
  const salt = randomBytes(16).toString("hex");
  const hash = pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex");
  return { salt, hash };
}

function verifyPassword(password: string, hash: string, salt: string): boolean {
  const hashToVerify = pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex");
  return timingSafeEqual(Buffer.from(hash, "hex"), Buffer.from(hashToVerify, "hex"));
}

export { hashPassword, verifyPassword };
