// Função para abrir checkout
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

// FAQ Accordion
document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      // Fecha outros itens abertos
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });
      
      // Abre/fecha o item atual
      item.classList.toggle('active');
    });
  });

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
