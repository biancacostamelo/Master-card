const imagem = document.getElementById('quadrado');

// Função para atualizar a rotação da imagem com base na posição do mouse
function updateRotation(event) {
  const rect = imagem.getBoundingClientRect(); // Posição da imagem na tela
  const mouseX = event.clientX - rect.left;  // Distância horizontal do mouse para a imagem
  const mouseY = event.clientY - rect.top;   // Distância vertical do mouse para a imagem
  const centerX = rect.width / 2;            // Posição X do centro da imagem
  const centerY = rect.height / 2;           // Posição Y do centro da imagem

  // Calcula a rotação com base na posição do mouse
  const deltaX = (mouseX - centerX) / centerX; // Normaliza o movimento no eixo X
  const deltaY = (mouseY - centerY) / centerY; // Normaliza o movimento no eixo Y

  // Aplica a rotação 3D à imagem
  imagem.style.transform = `rotateY(${deltaX * 25}deg) rotateX(${deltaY * -25}deg)`;
}

// Adiciona o evento para detectar o movimento do mouse
imagem.addEventListener('mousemove', updateRotation);

// Resetar a rotação quando o mouse sair da imagem
imagem.addEventListener('mouseleave', () => {
  imagem.style.transform = 'rotateX(0deg) rotateY(0deg)';
});


document.querySelectorAll('.faq-question').forEach(item => {
  item.addEventListener('click', () => {
      const answer = item.nextElementSibling;

      // Alternar entre esconder e mostrar a resposta
      if (answer.style.display === "block") {
          answer.style.display = "none";
      } else {
          answer.style.display = "block";
      }
  });
});

