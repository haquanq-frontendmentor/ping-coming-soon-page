const subscribeForm = document.querySelector(".subscribe__form");
const emailInput = document.querySelector("#email-input");
const emailInputHint = document.querySelector("#email-input-hint");

const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let errorMessage = "";
    if (emailInput.value === "") {
        errorMessage = "Whoops! It looks like you forgot to add your email.";
    } else if (!emailPattern.test(emailInput.value)) {
        errorMessage = "Please use a valid email address.";
    } else {
    }

    if (errorMessage !== "") {
        emailInputHint.textContent = errorMessage;
        emailInput.setAttribute("aria-invalid", "true");
        return false;
    }
    emailInputHint.textContent = "";
    emailInput.setAttribute("aria-invalid", "false");
    return true;
};

subscribeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateEmail()) alert("We have received your email address!");
});
