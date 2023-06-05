const express = require("express");
const app = express();

const { products } = require("./data.js");

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1>');
});

app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const singleProduct = products.find((product) => product.id === Number(id));

  if (!singleProduct) {
    return res.status(404).send("Product does not exist");
  }

  return res.json(singleProduct);
});

app.get("/api/products/:id/reviews/:review", (req, res) => {
  res.send("Hello World");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
