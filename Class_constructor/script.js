const body = document.body;
console.dir(body);

const arr1 = [2, 4, 5];
console.log(arr1);

//------------------------------------------
// FUNCTION (pasenes metodas)
function makeColor(r, g, b) {
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;
  // function for RGB
  color.rgb = () => {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
  };
  // function for HEX
  color.hex = () => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };
  return color;
}

const rgbColor = makeColor(255, 10, 255);
rgbColor.rgb();
console.log(rgbColor);
const hexColor = makeColor(255, 100, 100);
hexColor.hex();
console.log(hexColor);

//---------------------------------------
// FUNCTION Prototipe
function Colors(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

const colorOfColors = new Colors(255, 164, 147);

console.log(colorOfColors); // Object // Colors {r: 255, g: 164, b: 147}
console.log(Object.keys(colorOfColors)); // ['r', 'g', 'b']
console.log(Object.values(colorOfColors)); // [255, 164, 147]

// CLASS (naujas metodas)
class Cards {
  constructor(img, h1, p1, p2) {
    this.img = img;
    this.h1 = h1;
    this.p1 = p1;
    this.p2 = p2;
  }
  cardTempleate(){
    console.log('Viskas puiku')
  }
}

const cards = new Cards(1, 2, 3, 4);
cards.cardTempleate() // 'Viskas puiku'
console.log(cards);
