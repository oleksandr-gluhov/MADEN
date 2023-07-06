function validateForm(event, formId) {
    var form = document.getElementById(formId);
    var inputs = form.querySelectorAll('input.required_haracteristik');
    var isFormValid = false;

    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];

        if (!input.checkValidity()) {
            input.classList.add("invalid");
            isFormValid = true;
        } else {
            input.classList.remove("invalid");
        }
    }

    var submitButton = form.querySelector('.pop_up__call');
    if (isFormValid) {
        submitButton.style.display = "none";
    } else {
        submitButton.style.display = "block";
    }
}

function clearInvalidClass(input) {
    input.classList.remove("invalid");
}


function closePopup() {
    var popups = document.querySelectorAll('.pop_up__call');

    // Перебираємо всі елементи з класом "pop_up__call" і ховаємо кожен з них
    popups.forEach(function (popup) {
        popup.style.display = 'none';
    });
}

var closeButtons = document.querySelectorAll('.pop_up__close');
if (closeButtons) {
    closeButtons.forEach(function (closeButton) {
        closeButton.addEventListener('click', closePopup);
    });
}

var closeButton2s = document.querySelectorAll('.pop_up__call .pop_up .close_btn');
if (closeButton2s) {
    closeButton2s.forEach(function (closeButton2) {
        closeButton2.addEventListener('click', closePopup);
    });
}