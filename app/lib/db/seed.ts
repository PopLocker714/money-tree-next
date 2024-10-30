import { hashPassword } from "../../utils/password";
import db from "./db";
import { users } from "./schema";

export const seed = async () => {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;

  if (!email) {
    throw new Error("ADMIN_EMAIL is not defined");
  }

  if (!password) {
    throw new Error("ADMIN_PASSWORD is not defined");
  }

  const { hash, salt } = hashPassword(process.env.ADMIN_PASSWORD!);

  db.insert(users)
    .values({ email, password_hash: hash, salt })
    .then((res) => console.log("SEED INSERTED", res))
    .catch((e) => console.log(e));
};
