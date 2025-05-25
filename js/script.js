// /js/script.js

function abrirCheckout() {
  // 1. Configuração do checkout
  const payload = {
    productId: "ebook_troca_emprego",
    amount: 375, // MT
    currency: "MZN",
    customerEmail: "", // Será preenchido pelo form
    callbackUrl: window.location.origin + "/sucesso.html",
    cancelUrl: window.location.href
  };

  // 2. Redirecionamento para o PaySuite (URL de exemplo - substitua pela real)
  const paysuiteUrl = `https://api.paysuite.com/checkout?data=${encodeURIComponent(JSON.stringify(payload))}`;
  
  // 3. Abre em nova aba (ou pode usar window.location.href)
  window.open(paysuiteUrl, "_blank");
}

// 4. Adicionar máscara para telefone (opcional)
function formatarTelefone(input) {
  input.value = input.value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1 $2')
    .replace(/(\d{4})(\d)/, '$1 $2')
    .replace(/(\d{4})(\d{1,2})/, '$1 $2')
    .replace(/( \d{4})\d+?$/, '$1');
}
