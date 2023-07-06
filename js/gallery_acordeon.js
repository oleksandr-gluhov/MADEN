var toggleButtons = document.querySelectorAll(".see_all_btn");
var itemsContainers = document.querySelectorAll(".gallery_line");

toggleButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
        itemsContainers[index].classList.toggle("see_all");
        button.classList.toggle("active_rollup");

        if (button.classList.contains("active_rollup")) {
            button.textContent = "Згорнути";
        } else {
            button.textContent = "Дивитись більше";
        }
    });
});



