const button = document.querySelector('.button');
const lights = document.querySelectorAll('.lightsContainer div');

const turn = {
    0: 0,
    1: 1,
    2: 2,
    3: 1,
}
let counter = 0;

button.addEventListener('click', () => {
    for (i = 0; i < lights.length; i++) {
        if (lights[i].classList.contains(`light${i + 1}`)) {
            lights[i].classList.remove(`light${i + 1}`);
        }
    }

    lights[turn[counter]].classList.add(`light${turn[counter] + 1}`);
    counter++;

    if (counter === 4) {
        counter = 0;
    }
});