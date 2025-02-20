const fs = require("fs");
const db = require("better-sqlite3")("local.db", {});

// Читаем `data.json`
const rawData = fs.readFileSync("data.json", "utf8");
const { products, categories } = JSON.parse(rawData);

// Вставляем категории
const insertCategory = db.prepare("INSERT INTO categories (id, name, parent_id) VALUES (?, ?, ?)");
const insertProduct = db.prepare(
  "INSERT INTO products (id, sku, title, description, price, discount, stock, previewImage, images, category_id, keywordsSearch, isFeatured, isActive, deliveryInfo, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
);

// Открываем транзакцию для ускорения вставки
const insertData = db.transaction(() => {
  for (const category of categories) {
    insertCategory.run(category.id, category.name, category.parent_id);
  }

  for (const product of products) {
    insertProduct.run(
      product.id,
      product.sku,
      product.title,
      product.description,
      product.price,
      product.discount,
      product.stock,
      product.previewImage,
      product.images,
      product.category_id,
      product.keywordsSearch,
      product.isFeatured,
      product.isActive,
      product.deliveryInfo,
      product.createdAt,
      product.updatedAt
    );
  }
});

// Выполняем транзакцию
insertData();

console.log("Данные загружены обратно в базу!");
