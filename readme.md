# Mini E-commerce com Microserviços

Foi desenvolvido com arquitetura de microserviços utilizando **Node.js** e **Express.js**. A proposta visa praticar organização de serviços, consumo de APIs internas e conceitos básicos de autenticação. 💙

---

## 🧱 Arquitetura de Microserviços

O sistema é dividido em **três serviços independentes**, cada um rodando em sua própria porta:

### Auth Service – `localhost:3001`

Responsável por registrar e autenticar usuários.

#### 📌 Rotas:

* `POST /register`: Registra um novo usuário (`username` e `password`).
* `POST /login`: Realiza login e armazena o usuário logado.
* `GET /logged-user`: Retorna o usuário logado no momento.

> ⚠️ Os dados de usuário são armazenados **em memória** e a autenticação é **simulada**, sem uso de JWT ou sessões reais.

---

### Product Service – `localhost:3002`

Gerencia o catálogo de produtos disponíveis.

#### 📌 Rotas:

* `GET /products`: Lista todos os produtos.
* `GET /products/:id`: Retorna detalhes de um produto específico.

>  Os produtos são fixos no código-fonte, simulando um pequeno catálogo.

---

### Order Service – `localhost:3003`

Gerencia os pedidos feitos pelos usuários.

#### 📌 Rotas:

* `POST /order`: Cria um pedido com base no `username` e `productId`.
* `GET /orders`: Lista todos os pedidos realizados.

> Este serviço **consome os outros dois** usando `Axios`, validando o usuário e buscando dados do produto antes de criar o pedido.

---

## Como executar o projeto

### Pré-requisitos

* [Node.js](https://nodejs.org/)
* [npm](https://www.npmjs.com/)

### 🛠️ Passo a passo

1. **Clone o repositório:**

```bash
git clone https://github.com/AmandaLisboa-Ramos/mini-ecommerce-API.git
```

Abra três terminais separados, um para cada serviço:

```bash
cd auth-service
npm install
npm start
```

```bash
cd product-service
npm install
npm start
```

```bash
cd order-service
npm install
npm start
```

## 🧪 Testando os Endpoints

Você pode testar os endpoints usando:

* [Postman](https://www.postman.com/)
* [Insomnia](https://insomnia.rest/)
* Ou pelo navegador (para rotas `GET`)

---

## 🧰 Tecnologias Utilizadas

* **Node.js**
* **Express.js**
* **Axios**
* **JavaScript**

---

## 📁 Estrutura Sugerida de Diretórios

```bash
mini-ecommerce/
├── auth-service/
│   ├── index.js
│   └── package.json
├── product-service/
│   ├── index.js
│   └── package.json
├── order-service/
│   ├── index.js
│   └── package.json
├── .gitignore
└── README.md
```

## 👩‍💻 Desenvolvido por

Amanda Lisboa
💻 Estudante de Análise e Desenvolvimento de Sistemas

[🔗 GitHub](https://github.com/AmandaLisboa-Ramos) • [🔗 LinkedIn](https://www.linkedin.com/in/amanda-lisboa-789a42330/)

---

## 💡 Observações Finais

* O projeto é acadêmico e simula de forma simples os conceitos de microserviços.
* Não utiliza banco de dados, tudo é armazenado em memória.
* Ideal para aprender integração entre serviços e consumo de APIs internas.
