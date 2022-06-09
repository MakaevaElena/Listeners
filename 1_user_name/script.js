const input = document.querySelector('input');
let template = /[0-9]/g;

input.addEventListener('input', () => {
    input.value = input.value.replace(template, '');
});