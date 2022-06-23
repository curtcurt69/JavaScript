const text = document.querySelector('.maintext');
const mainContainer = document.querySelector('.container');

mainContainer.addEventListener('mousemove', runEvent);

function runEvent(e) {
    e.preventDefault();
    text.textContent = `Mouse X: ${e.offsetX}, MouseY: ${e.offsetY}`;
    document.body.style.backgroundColor = `rgb(${e.offsetX}, 180, ${e.offsetY})`;
}