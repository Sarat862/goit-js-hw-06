const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormElSubmit);

function onFormElSubmit(event) {
    event.preventDefault();

    const formEmail = event.currentTarget.elements.email.value;
    const formPassword = event.currentTarget.elements.password.value;

    if (formEmail === '' || formPassword === '') {
        return alert("Please fill in all the fields!")
    };
    
    const objectForm = {
        formEmail,
        formPassword,
    }
    console.log(objectForm);
    event.currentTarget.reset();    
}
