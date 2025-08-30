  const cpfInput = document.getElementById('cpf');

  if (cpfInput) {
    cpfInput.addEventListener('input', function (e) {
      let value = e.target.value;

      // Remove tudo que não for número
      value = value.replace(/\D/g, '');

      // Limita a 11 dígitos
      value = value.substring(0, 11);

      // Aplica máscara
      if (value.length > 9) {
        value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{0,2}).*/, '$1.$2.$3-$4');
      } else if (value.length > 6) {
        value = value.replace(/^(\d{3})(\d{3})(\d{0,3}).*/, '$1.$2.$3');
      } else if (value.length > 3) {
        value = value.replace(/^(\d{3})(\d{0,3}).*/, '$1.$2');
      }

      e.target.value = value;

      // ❌ Aqui NÃO deve submeter automaticamente
      // ❌ Evite: pontoForm.submit(); — pois não queremos envio automático nesse formulário
    });
  }

  // Se quiser ocultar mensagens (se você tiver mensagens no template)
  window.addEventListener('DOMContentLoaded', function () {
    const mensagens = document.querySelectorAll('.messages p');

    mensagens.forEach((msg) => {
      const isErro = msg.classList.contains('erro');
      const tempo = isErro ? 3000 : 1000;

      setTimeout(() => {
        msg.style.display = 'none';
      }, tempo);
    });
  });
