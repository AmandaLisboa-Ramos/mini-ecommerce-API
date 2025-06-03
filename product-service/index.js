const express = require('express');
const app = express();
app.use(express.json());

const products = [
  { id: 1, name: 'PS5', price: 4500 },
  { id: 2, name: 'Switch2', price: 4999 },
  { id: 3, name: 'XBOX', price: 4200 },
];

app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Produto não encontrado' });
  }
});

app.listen(3002, () => {
  console.log('Product Service rodando na porta 3002');
});
