document.addEventListener("DOMContentLoaded", () => {
  /* =============================
     MENU HAMBÚRGUER
  ============================= */

  const menuToggle = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const navLinks = document.querySelectorAll(".sidebar nav a");

  if (menuToggle && sidebar && overlay) {
    // Abrir / fechar menu
    menuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("active");
      overlay.classList.toggle("active");
      menuToggle.classList.toggle("active");
      document.body.classList.toggle("menu-open");
    });

    // Fechar clicando no overlay
    overlay.addEventListener("click", () => {
      closeMenu();
    });

    // Fechar clicando nos links
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        closeMenu();
      });
    });
  }

  function closeMenu() {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    menuToggle.classList.remove("active");
    document.body.classList.remove("menu-open");
  }

  /* =============================
     FILTRO DE PROJETOS
  ============================= */

  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.dataset.filter;

      cards.forEach((card) => {
        const category = card.dataset.category;

        if (filter === "all" || category === filter) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
