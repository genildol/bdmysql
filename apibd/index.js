const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Listar usuários
app.get('/usuarios', async (req, res) => {
  const usuarios = await prisma.usuario.findMany();
  res.json(usuarios);
});

// Criar usuário
app.post('/usuarios', async (req, res) => {
  const { nome, email } = req.body;
  const novo = await prisma.usuario.create({
    data: { nome, email }
  });
  res.json(novo);
});

app.listen(3000, () => {
  console.log('🚀 API rodando em http://localhost:3000');
});

