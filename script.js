// Função para verificar quando o produto está visível
function checkVisibility() {
    const productCards = document.querySelectorAll('.product-card');
    const windowHeight = window.innerHeight;
  
    productCards.forEach(card => {
      const rect = card.getBoundingClientRect();
      
      if (rect.top < windowHeight && rect.bottom >= 0) {
        card.classList.add('visible');
      }
    });
  }
  
  // Verifica a visibilidade na rolagem
  window.addEventListener('scroll', checkVisibility);
  
  // Verifica a visibilidade ao carregar a página
  window.addEventListener('load', checkVisibility);
  