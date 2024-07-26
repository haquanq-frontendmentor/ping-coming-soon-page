const emailForm = document.querySelector(".main__form");
const emailInput = document.querySelector(".main__form__input");
const emailInputHint = document.querySelector(".main__form__input-hint");

emailForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (emailInput.value == "") {
        emailInputHint.textContent = "Whoops! It looks like you forgot to add your email";
        emailInput.setAttribute("aria-invalid", "true");
        return;
    }

    alert("We have received your email!");
});

emailInput.addEventListener("invalid", (e) => {
    e.preventDefault();

    emailInputHint.textContent = "Please provide a valid email address";
    emailInput.setAttribute("aria-invalid", "true");
});

emailInput.addEventListener("input", (e) => {
    emailInputHint.textContent = "";
    emailInput.setAttribute("aria-invalid", "false");
});
