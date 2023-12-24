let div = null;

window.onload = main;

function main() {
  const bgColorChange = document.querySelector('.main');
  const btn = document.querySelector('#btn');
  const colorCode = document.querySelector('.colorCode');
  const HexColorCopy = document.getElementById('HEXcopy');

  // Button click Random change background color
  btn.addEventListener('click', function () {
    bgColorChange.style.backgroundColor = generateRandomColor();
    colorCode.value = generateRandomColor().toUpperCase();
    HexColorCopy.innerHTML = 'Copy Now';
  });

  // Random change background color event
  bgColorChange.style.backgroundColor = generateRandomColor();
  colorCode.value = generateRandomColor().toUpperCase();

  // Color Code copy Event
  HexColorCopy.addEventListener('click', function () {
    navigator.clipboard.writeText(colorCode.value);
    HexColorCopy.innerHTML = 'Copied';
    if (div != null) {
      div.remove();
      div = null;
    }
    codeisCopied(`(${colorCode.value}) is copied`);
  });
}

// Copied Toast Massage

function codeisCopied(massage) {
  div = document.createElement('div');
  const className = (div.className = 'toast_massage');
  div.innerText = massage;
  document.body.appendChild(div);
  div.addEventListener('click', function () {
    div.classList.add('animet_out');
    this.addEventListener('animationend', function () {
      div.remove();
      div = null;
    });
  });
}

//  Color code genaret
function generateRandomColor() {
  const red = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
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
