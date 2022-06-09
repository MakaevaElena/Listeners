const button1 = document.querySelector('.btn1');
const button2 = document.querySelector('.btn2');

button1.addEventListener('mouseover', (evt) => {
    let target = evt.target;
    tooltipElem = document.createElement('div');
    tooltipElem.className = 'tooltip';
    tooltipElem.innerHTML = 'Tool Tip 1';
    document.body.append(tooltipElem);

    tooltipElem.style.left = evt.pageX - target.offsetWidth + 'px';
    tooltipElem.style.top = evt.pageY - target.offsetHeight + 'px';
});

button1.addEventListener('mouseout', () => {

    if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
    }
});

button2.addEventListener('mouseover', (evt) => {
    let target = evt.target;
    tooltipElem = document.createElement('div');
    tooltipElem.className = 'tooltip';
    tooltipElem.innerHTML = 'Tool Tip 2';
    document.body.append(tooltipElem);

    tooltipElem.style.left = evt.pageX - target.offsetWidth + 'px';
    tooltipElem.style.top = evt.pageY - target.offsetHeight + 'px';
});


button2.addEventListener('mouseout', () => {

    if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
    }
});
