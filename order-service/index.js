const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());

const orders = [];

app.post("/order", async (req, res) => {
  const { username, productId } = req.body;
  try {
    const responseProduct = await axios.get(
      `http://localhost:3002/products/${productId}`
    );
    const responseLoggedUser = await axios.get(
      `http://localhost:3001/logged-user`
    );
    const product = responseProduct.data;
    const loggedUser = responseLoggedUser.data;

    const order = {
      id: orders.length + 1,
      username,
      product,
    };
    if (loggedUser[0].username === username) {
      orders.push(order);
      res.status(201).json({ message: "Pedido criado com sucesso", order });
    } else {
      res.status(401).json({ message: "Usuário não logado" });
    }
  } catch (error) {
    res.status(404).json({ message: "Produto não encontrado" });
  }
});

app.get("/orders", (req, res) => {
  res.json(orders);
});

app.listen(3003, () => {
  console.log("Order Service rodando na porta 3003");
});
