document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".list-group-item");

    items.forEach((item) => {
        const text = item.textContent;
        if (text.includes("Ootel")) {
            item.classList.add("list-group-item-warning");
        } else if (text.includes("Tehtud")) {
            item.classList.add("list-group-item-success");
            item.style.fontWeight = "700";
        } else if (text.includes("Viga")) {
            item.classList.add("list-group-item-danger");
        }
    });
});
