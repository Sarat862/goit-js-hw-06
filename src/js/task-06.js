const inputEl = document.querySelector('input#validation-input');

inputEl.addEventListener('blur', (event) => {

    if (event.currentTarget.value.trim().length === Number(event.currentTarget.dataset.length)) {
        event.currentTarget.classList.remove("invalid");
        event.currentTarget.classList.add('valid');
    } else {
        event.currentTarget.classList.remove("valid");
        event.currentTarget.classList.add("invalid");
    }
})
    