const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "Light";
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");

    localStorage.setItem("theme", isDark ? "dark" : "light");

    themeToggle.textContent = isDark ? "Light" : "Dark";
  });
}

const deleteForms = document.querySelectorAll(".delete-form");

deleteForms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this article?",
    );

    if (!confirmed) {
      event.preventDefault();
    }
  });
});
