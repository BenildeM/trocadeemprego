const paysuiteWebhook = require('./webhook/paysuite');

app.post('/webhook/paysuite', (req, res) => {
  // Processar notificação de pagamento
  const paymentStatus = req.body.status;
  
  if (paymentStatus === 'approved') {
    // Lógica para liberar o eBook (ex: enviar e-mail, registrar no DB)
    console.log('Pagamento aprovado:', req.body);
  }
  
  res.status(200).send('Webhook recebido');
});
