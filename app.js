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
    colorCode.value = generateRandomColor();
    HexColorCopy.innerHTML = 'Copy Now';

    div.classList.add('animet_out');
    div.addEventListener('animationend', function () {
      div.remove();
      div = null;
    });
  });

  // Random change background color event
  bgColorChange.style.backgroundColor = generateRandomColor();
  colorCode.value = generateRandomColor();
  colorCode.style.textTransform = 'uppercase';

  // Color Code copy Event
  HexColorCopy.addEventListener('click', function () {
    navigator.clipboard.writeText(colorCode.value);
    HexColorCopy.innerHTML = 'Copied';
    if (div != null) {
      div.remove();
      div = null;
    }
    if (validHexCode(colorCode.value)) {
      codeisCopied(`(${colorCode.value}) is copied`);
    } else {
      alert` The Color Code Is Not Valid`;
    }
  });

  // Valid color code and change the background color
  colorCode.addEventListener('keyup', function (e) {
    const color = e.target.value;
    if (color && validHexCode(color)) {
      bgColorChange.style.backgroundColor = color;
    }
  });
}

// Copied Toast Massage

function codeisCopied(massage) {
  div = document.createElement('div');
  div.className = 'toast_massage';
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

// Valid color input. then change the background color
/**
 *
 * @param {string} color
 */
function validHexCode(color) {
  if (color.length != 7) return false;
  if (color[0] != '#') return false;
  color = color.substring(1);
  return /^[0-9A-Fa-f]{6}$/i.test(color);
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
