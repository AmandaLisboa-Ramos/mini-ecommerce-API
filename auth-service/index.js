const express = require('express');
const app = express();
app.use(express.json());

const users = [];
const localData = [];

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  users.push({ username, password });
  res.status(201).json({ message: 'Usuário registrado com sucesso' });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    localData.push({ username });
    res.json({ message: 'Login bem-sucedido' });
  } else {
    res.status(401).json({ message: 'Credenciais inválidas' });
  }
});

app.get('/logged-user', (req, res) => {
  res.json(localData);
});

app.listen(3001, () => {
  console.log('Auth Service rodando na porta 3001');
});
