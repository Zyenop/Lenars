const textareaEl = document.getElementById('textarea');

const totalCharsetEl = document.getElementById('total-charset');

const remainingCharsetEl = document.getElementById('remaining-charset');
textareaEl.addEventListener('keyup', () => {
 updateCounter()
})

updateCounter()

function updateCounter() {
 totalCharsetEl.innerText = textareaEl.value.length;
 remainingCharsetEl.innerText = textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}