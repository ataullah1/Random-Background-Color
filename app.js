window.onload = main;

function main() {
  const bgColorChange = document.querySelector('.main');
  const btn = document.querySelector('#btn');
  const colorCode = document.querySelector('.colorCode');

  btn.addEventListener('click', function () {
    bgColorChange.style.backgroundColor = generateRandomColor();
    colorCode.value = generateRandomColor().toUpperCase();
  });

  bgColorChange.style.backgroundColor = generateRandomColor();
  colorCode.value = generateRandomColor().toUpperCase();
}

function generateRandomColor() {
  const red = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  let rgbcolorgenaret = function () {
    const rgb = `rgb(${red},${green},${blue})`;
    let rgbinput = document.getElementById('RGBColor');
    rgbinput.value
  };
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

/*





==> Random RGB Color Genret Way-01

const red = Math.floor(Math.random() * 255);
const blue = Math.floor(Math.random() * 255);
const green = Math.floor(Math.random() * 255);
const genaretColor = `rgb(${red},${green},${blue})`;


==> Random RGB Color Genret Way-02

function ColorGenret() {
  const red = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  return `rgb(${red},${green},${blue})`;
}


==> Random RGB Color Genret Way-03

function ColorGenret() {
  const randomColor = () => Math.floor(Math.random() * 255);
  return `rgb(${randomColor()},${randomColor()},${randomColor()})`;
}

==> Random HEX Color Genret Way-04

function ColorGenret() {
  const red = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
   return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}




*/
