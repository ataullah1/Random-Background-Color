window.onload = main;

function main() {
  const bgColorChange = document.querySelector('.main');
  const btn = document.querySelector('#btn');

  btn.addEventListener('click', function () {
    bgColorChange.style.backgroundColor = generateRandomColor();
  });

  bgColorChange.style.backgroundColor = generateRandomColor();
}

function generateRandomColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red},${green},${blue})`;
}

/*





==> Random Color Genret Way-01

const red = Math.floor(Math.random() * 255);
const blue = Math.floor(Math.random() * 255);
const green = Math.floor(Math.random() * 255);
const genaretColor = `rgb(${red},${green},${blue})`;


==> Random Color Genret Way-02

function ColorGenret() {
  const red = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  return `rgb(${red},${green},${blue})`;
}


==> Random Color Genret Way-03

function ColorGenret() {
  const randomColor = () => Math.floor(Math.random() * 255);
  return `rgb(${randomColor()},${randomColor()},${randomColor()})`;
}



*/
