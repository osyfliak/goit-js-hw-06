const refs = {
    input: document.querySelector('#validation-input')
}

refs.input.addEventListener('blur', onBlurChange)

function onBlurChange() {
    if (this.value.length === Number(refs.input.dataset.length)) {
       this.classList.add("valid");
       this.classList.remove("invalid");
    } else { 
       this.classList.add("invalid")
       this.classList.remove("valid");
    }

}