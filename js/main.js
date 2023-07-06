function increaseValue(inputId) {
    var inputElement = document.querySelector(inputId);
    var value = parseInt(inputElement.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    inputElement.value = value;
}

function decreaseValue(inputId) {
    var inputElement = document.querySelector(inputId);
    var value = parseInt(inputElement.value, 10);
    value = isNaN(value) ? 0 : value;

    // Перевіряємо, чи нове значення буде більше або рівне мінімальному значенню (1)
    if (value > 1) {
        value--;
    }

    inputElement.value = value;
}
var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
        /* For each option in the original select element,
        create a new DIV that will act as an option item: */
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
            /* When an item is clicked, update the original select box,
            and the selected item: */
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
        /* When the select box is clicked, close any other select boxes,
        and open/close the current select box: */
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

function toggleActiveClass(blockNumber) {
    var blocks = document.getElementsByClassName("window");
    var selectedBlock = blocks[blockNumber - 1];

    // Перевіряємо, чи натиснутий блок вже має клас активності
    var isActive = selectedBlock.classList.contains("active");

    // Забираємо клас активності у всіх блоках
    for (var i = 0; i < blocks.length; i++) {
        blocks[i].classList.remove("active");
    }

    // Додаємо клас активності до натиснутого блоку, якщо він ще не активний
    if (!isActive) {
        selectedBlock.classList.add("active");
    }
}




var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

var roll_upButtons = document.getElementsByClassName("roll_up");
for (var j = 0; j < roll_upButtons.length; j++) {
    roll_upButtons[j].addEventListener("click", function () {
        var panel = this.parentNode;
        panel.style.display = "none";
    });
}



var grid_slider = document.getElementsByClassName("splide__track");
var clik_img = document.getElementsByClassName("clik_img");
var i;

for (var i = 1; i < grid_slider.length; i++) {
    grid_slider[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        var parentElement = this.parentNode.parentNode;
        parentElement.classList.add('img_active');

    });
}
for (i = 0; i < clik_img.length; i++) {
    clik_img[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        var parentElement = this.parentNode;
        parentElement.classList.remove('img_active');

    });
}











// var allVariablesIndex = 1;
// var variablesIndex = 1;
// var removeVariableIndex = 1;
// var addVariableIndex = 1;

// var form = document.getElementById("form3");

// var moveButtons = document.querySelectorAll(".add_variables");
// var block = document.querySelector(".variables");
// var removeButton = document.querySelector(".remove_variable");

// moveButtons.forEach(function (button) {
//     button.addEventListener("click", function () {
//         var section = document.createElement("section");
//         section.className = "all_variables all_variables" + allVariablesIndex;

//         var variables = block.cloneNode(true);
//         variables.className = "variables variables" + variablesIndex;
//         section.appendChild(variables);

//         form.appendChild(section);   

//         var addButton = button.cloneNode(true);
//         addButton.className = "add_variables add_variables" + addVariableIndex;
//         section.appendChild(addButton);

//         var removeBtn = removeButton.cloneNode(true);
//         removeBtn.className = "remove_variable remove_variable" + removeVariableIndex;
//         section.appendChild(removeBtn);

//         allVariablesIndex++;
//         variablesIndex++;
//         removeVariableIndex++;
//         addVariableIndex++;
//     });
// });
var moveButtons = document.querySelectorAll(".add_variables");
var counterElements = document.querySelectorAll(".variables__counter .count");
var counters = [];
var maxBlocks = 2; // Максимальна кількість блоків, яку дозволено

moveButtons.forEach(function (button, index) {
    var block = document.querySelector(".variables" + (index + 1));
    counters[index] = 1;

    button.addEventListener("click", function () {
        var section = document.querySelector(".all_variables" + (index + 1));
        var blocks = section.querySelectorAll(".variables" + (index + 1));

        if (blocks.length < maxBlocks) {
            var blockCopy = block.cloneNode(true);
            section.appendChild(blockCopy);
            counters[index]++;
            counterElements[index].textContent = counters[index];

            if (counters[index] > 1) {
                var removeButton = document.querySelector(".remove_variable" + (index + 1));
                removeButton.style.display = "flex";
            }

            if (counters[index] === maxBlocks) {
                // Досягнуто максимальну кількість блоків, ховаємо кнопку "Додати елемент"
                moveButtons[index].style.display = "none";
            }
        }
    });

    var removeButton = document.querySelector(".remove_variable" + (index + 1));
    removeButton.addEventListener("click", function () {
        var section = document.querySelector(".all_variables" + (index + 1));
        var blocks = section.querySelectorAll(".variables" + (index + 1));

        if (blocks.length > 1) {
            var lastBlock = blocks[blocks.length - 1];
            section.removeChild(lastBlock);
            counters[index]--;
            counterElements[index].textContent = counters[index];

            if (counters[index] <= 1) {
                removeButton.style.display = "none";
            }

            if (counters[index] < maxBlocks) {
                // При видаленні блоку, коли кількість блоків менша за максимальну, показуємо кнопку "Додати елемент"
                moveButtons[index].style.display = "flex";
            }
        }
    });
});
