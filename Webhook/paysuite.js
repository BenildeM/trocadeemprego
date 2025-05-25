// webhook/paysuite.js
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

// Middleware para capturar JSON puro (importante para validar assinatura)
router.use(bodyParser.raw({ type: 'application/json' }));

router.post('/paysuite', (req, res) => {
  const sig = req.headers['paysuite-signature']; // Exemplo
  const secret = process.env.PAYSUITE_WEBHOOK_SECRET;

  // Aqui você faria a verificação do webhook usando seu segredo
  // e processaria o evento se estiver válido

  console.log('Webhook recebido:', req.body.toString());

  res.status(200).send('Webhook recebido com sucesso');
});

module.exports = router;
