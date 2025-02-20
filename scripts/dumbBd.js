const fs = require("fs");
const db = require("better-sqlite3")("local.db", {});

const products = db.prepare("SELECT * FROM products").all();
const categories = db.prepare("SELECT * FROM categories").all();

// Создаем объект
const data = { products, categories };

fs.writeFileSync("data.json", JSON.stringify(data, null, 2), "utf8");

console.log("Данные сохранены в data.json");
