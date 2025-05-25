function abrirCheckout() {
  // Configuração básica do PaySuite (substitua pelos seus dados reais)
  const checkoutConfig = {
    merchantId: "SEU_MERCHANT_ID",
    amount: 375, // Valor em MT
    currency: "MZN",
    reference: "ebook-" + Date.now(),
    callbackUrl: "https://benildem.github.io/trocadeemprego/sucesso.html",
    cancelUrl: "https://benildem.github.io/trocadeemprego/",
  };

  // Abre o checkout em nova janela (simulação - integração real requer API do PaySuite)
  window.open(
    `https://checkout.paysuite.com/?data=${encodeURIComponent(JSON.stringify(checkoutConfig))}`,
    "_blank"
  );
}
