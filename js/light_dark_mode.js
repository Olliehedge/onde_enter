// Tilføj din JavaScript her

const html = document.querySelector("html");
const btn = document.querySelector("#toggle");

function toggleTheme() {
  html.classList.toggle('dark');
}

btn.addEventListener('click', toggleTheme);
