const changeColorBtn = document.getElementById('changeColor');
const body = document.body;

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

changeColorBtn.addEventListener('click', () => {
    const randomColor = getRandomColor();
    body.style.backgroundColor = randomColor;
});

const removeColorBtn = document.getElementById('removeColor');

removeColorBtn.addEventListener('click', () => {
    body.style.background = ""; // Сброс всего фона
    // Или: body.style.backgroundColor = ""; (только для цвета)
});

const gradientColorBtn = document.getElementById('gradientColor');

gradientColorBtn.addEventListener('click', () => {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    body.style.background = `linear-gradient(45deg, ${color1}, ${color2})`;
});