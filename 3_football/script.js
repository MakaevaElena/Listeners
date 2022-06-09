const ballImg = document.querySelector('img');
console.log(ballImg);

document.addEventListener('click', (evt) => {
    ballImg.style.left = evt.pageX - ballImg.offsetWidth / 2 + 'px';
    ballImg.style.top = evt.pageY - ballImg.offsetHeight / 2 + 'px';
});