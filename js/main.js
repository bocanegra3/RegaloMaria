    function continuar() {
      const check = document.getElementById('aceptarCheck');
      const feedback = document.getElementById('feedback');

      if (!check.checked) {
        feedback.classList.remove('d-none');
        return;
      }

      // Si aceptó, redirige a la “entrada”
      window.location.href = "pages/entrada.html";
    }