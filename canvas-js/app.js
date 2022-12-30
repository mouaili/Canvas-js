const canvas = document.querySelector('#canvas');
let particlesTab;

const ctx = canvas.getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

console.log(canvas, ctx);

//

class Particle {
  constructor(x, y, directionX, directionY, size, color) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
  }
  //methode (fonction)
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

/**
 * @param[fonction init() pour initialiser le projet du canvas]
 */

function init() {
  // body
  particlesTab = [];

  for (let i = 0; i < 300; i++) {
    let size = Math.floor(Math.random() * 50);
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);
    let directionX = Math.floor(Math.random() * 10);
    let directionY = Math.floor(Math.random() * 10);
    let color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    //let color = 'red';

    const newColor = new Particle(x, y, directionX, directionY, size, color);
    particlesTab.push(newColor);
  }
}

init();

//Mise à jour du fond du canvas

for (let i = 0; i < particlesTab.length; i++) {
  const element = particlesTab[i];
  element.draw();
}
