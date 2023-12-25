let div = null;

window.onload = main;

function main() {
  const bgColorChange = document.querySelector('.main');
  const btn = document.querySelector('#btn');
  const hexColorCode = document.querySelector('.colorCode');
  const rgbColorCode = document.getElementById('RGBColor');
  const HexColorCopy = document.getElementById('HEXcopy');
  const RgbColorCopy = document.getElementById('RGBcopy');

  // Button click Random change background color
  btn.addEventListener('click', function () {
    const color = dacimalColor();
    const hexColor = genarethexColor(color);
    const rgbColor = genaretRGBColor(color);
    bgColorChange.style.backgroundColor = hexColor;
    hexColorCode.value = hexColor;
    rgbColorCode.value = rgbColor;

    HexColorCopy.innerHTML = 'Copy Now';
    RgbColorCopy.innerHTML = 'Copy Now';

    div.classList.add('animet_out');
    div.addEventListener('animationend', function () {
      div.remove();
      div = null;
    });
  });

  // Random change background color event
  const color = dacimalColor();
  const hexColor = genarethexColor(color);
  const rgbColor = genaretRGBColor(color);
  bgColorChange.style.backgroundColor = hexColor;
  hexColorCode.value = hexColor;
  rgbColorCode.value = rgbColor;
  hexColorCode.style.textTransform = 'uppercase';

  //HEX Color Code copy Event
  HexColorCopy.addEventListener('click', function () {
    navigator.clipboard.writeText(hexColorCode.value);
    HexColorCopy.innerHTML = 'Copied';
    if (div != null) {
      div.remove();
      div = null;
    }
    if (validHexCode(hexColorCode.value)) {
      codeisCopied(`(${hexColorCode.value}) is copied`);
    } else {
      alert` The Color Code Is Not Valid`;
    }
  });

  //RGB Color Code copy Event
  RgbColorCopy.addEventListener('click', function () {
    navigator.clipboard.writeText(RgbColorCopy.value);
    RgbColorCopy.innerHTML = 'Copied';
    if (div != null) {
      div.remove();
      div = null;
    }
    return codeisCopied(`(${rgbColorCode.value}) is copied`);
  });

  // Valid color code and change the background color
  hexColorCode.addEventListener('keyup', function (e) {
    const color = e.target.value;
    if (color && validHexCode(color)) {
      bgColorChange.style.backgroundColor = color;
      const hasRemoveColorCode = color.substring(1);
      rgbColorCode.value = HexToRgb(hasRemoveColorCode);
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

//  Color Dacimal Value Function

function dacimalColor() {
  const red = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  return { red, blue, green };
}

// HEX Color code genaret
function genarethexColor({ red, blue, green }) {
  const getTwoCode = (value) => {
    const hex = value.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  };
  return `#${getTwoCode(red)}${getTwoCode(blue)}${getTwoCode(green)}`;
}

// RGB Color code genaret
function genaretRGBColor({ red, blue, green }) {
  return `rgb(${red},${blue},${green})`;
}

/**
 * HEX to RGB color code convert
 *
 * @param {string} hex2rgb
 */

function HexToRgb(hex2rgb) {
  const red = parseInt(hex2rgb.slice(0, 2), 16);
  const blue = parseInt(hex2rgb.slice(2, 4), 16);
  const green = parseInt(hex2rgb.slice(4), 16);

  return `rgb(${red},${blue},${green})`;
}
// console.log(HexToRgb('ffffff'));
/*



==>>Random Hex Color Create Real Way {Not error} 

function dacimalColor() {
  const red = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  return { red, blue, green };
}

//  Color code genaret
function generateRandomColor() {
  const { red, blue, green } = dacimalColor();
  const gettwoCode = (value) => {
    const hex = value.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  };
  return `#${gettwoCode(red)}${gettwoCode(blue)}${gettwoCode(green)}`;
}




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
