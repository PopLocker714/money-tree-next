import db from "../db/db";

export default async function getAllProducts() {
  try {
    const products = await db.query.$Products.findMany();
    return products;
  } catch (error) {
    console.log(error);
    return [];
  }
}
