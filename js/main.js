console.log("JS carregou");

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active de todos
      buttons.forEach((btn) => btn.classList.remove("active"));

      // Adiciona active no clicado
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
