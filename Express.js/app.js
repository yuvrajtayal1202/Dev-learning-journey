import express from "express";
import { products } from "./data.js";
const app = express();

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1><a href = "/api/products">products</a>');
});

app.get("/api/products", (req, res) => {
  const newProduct = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProduct);
});

app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;

  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (!singleProduct) {
    return res.status(404).send("Product Does Not Exist");
  }

  return res.json(singleProduct);
});

app.listen(800, () => {
  // console.log("Server is listening on port 6000")
});
