// main.js

const bouton = document.getElementById("themeToggle");

if (bouton) {
    bouton.addEventListener("click", function() {
        document.body.classList.toggle("dark");
        if (document.body.classList.contains("dark")) {
            bouton.textContent = "💡 Allumer";
        } else {
            bouton.textContent = "🌙 Eteindre";
        }
    });
}
