function abrirCheckout() {
  // Dados do produto
  const produto = {
    nome: "Livro - De Invisível a Indispensável",
    preco: 375, // MT
    moeda: "MZN",
    id: "trocadeemprego-001"
  };

  // Simulação de redirecionamento para checkout
  console.log("Redirecionando para checkout...", produto);
  
  // Em produção, substituir por:
  // window.location.href = `https://checkout.com?produto=${produto.id}`;
  
  // Modal de confirmação (simulação)
  alert(`Você será redirecionado para comprar: ${produto.nome} por ${produto.preco} MT`);
}

// Efeitos interativos
document.addEventListener('DOMContentLoaded', function() {
  // Anima os cards ao rolar a página
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.benefit-card').forEach(card => {
    observer.observe(card);
  });
});
