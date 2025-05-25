// webhook/paysuite.js
module.exports = (req, res, next) => {
  // Valida assinatura do PaySuite (implemente conforme documentação)
  const signatureValid = validarAssinatura(req.headers['x-paysuite-signature']);

  if (!signatureValid) {
    return res.status(403).send('Assinatura inválida');
  }

  next(); // Passa para o handler no server.js
};
