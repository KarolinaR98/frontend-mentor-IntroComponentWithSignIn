const form = document.getElementById("trial-form");
const inputs = document.querySelectorAll("input");

const resetAllErrors = () => {

    const errorMsg = document.getElementsByClassName("err-msg");
    const inputsWithErrorClass = document.getElementsByClassName("error");

    while (errorMsg[0]) {
        errorMsg[0].parentNode.removeChild(errorMsg[0]);
    }

    if (inputsWithErrorClass.length > 0) {

        for (let i = 0; i < inputsWithErrorClass.length; i++) {
            inputsWithErrorClass[i].classList.remove('error');
        }
    }
}

const createErrorMsg = (msg) => {

    let errorMsg = document.createElement('p');
    errorMsg.innerText = msg;
    errorMsg.classList.add("err-msg");

    return errorMsg;
}

const removeErrorClass = (e) => {

    if (e.target.classList.contains('error')) {
        e.target.classList.remove('error');

        const nextElement = e.target.nextElementSibling;

        if (nextElement.classList.contains('err-msg')) {

            nextElement.parentNode.removeChild(nextElement);

        }
    }
}

const validate = (e) => {

    resetAllErrors();

    const nameInput = document.getElementById("name");
    const lastNameInput = document.getElementById("last-name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");


    if (nameInput.value === "") {

        nameInput.classList.add("error");

        let nameError = createErrorMsg("First Name cannot be empty")
        nameInput.after(nameError);
    }

    if (lastNameInput.value === "") {

        lastNameInput.classList.add("error");

        let lastNameError = createErrorMsg("Last Name cannot be empty")
        lastNameInput.after(lastNameError);
    }

    if (emailInput.value === "" || !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value))) {

        emailInput.classList.add("error");

        emailError = createErrorMsg("Looks like this is not an email");
        emailInput.after(emailError);
    }

    if (passwordInput.value === "") {

        passwordInput.classList.add("error");

        passwordError = createErrorMsg("Password cannot be empty");
        passwordInput.after(passwordError);
    }

    if(document.getElementsByClassName("error").length > 0){

        e.preventDefault();
    }

    
}

form.addEventListener("submit", validate);

inputs.forEach((element) => {
    element.addEventListener("click", removeErrorClass);
})