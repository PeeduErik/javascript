document.addEventListener("DOMContentLoaded", function () {
    const themeButton = document.getElementById("theme");
    const body = document.body;
    
    themeButton.addEventListener("click", function () {
        if (body.classList.contains("dark")) {
            body.classList.remove("dark");
            themeButton.textContent = "Dark Theme";
        } else {
            body.classList.add("dark");
            themeButton.textContent = "Light Theme";
        }
    });
});
