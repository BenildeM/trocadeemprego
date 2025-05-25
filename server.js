const express = require('express');
const path = require('path');
const app = express();

const paysuiteWebhook = require('./webhook/paysuite');

// Servir arquivos públicos
app.use('/ebooks', express.static(path.join(__dirname, 'ebooks')));

// Usar webhook
app.use('/webhook', paysuiteWebhook);

// Página raiz opcional
app.get('/', (req, res) => {
  res.send('Servidor backend funcionando!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
