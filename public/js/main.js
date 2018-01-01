function loadImage(url){
  return new Promise(resolve =>{
    const image = new Image();
    console.log(1);
    image.src = url;

    image.addEventListener('load',() =>{
      console.log(2);
      resolve(image);
    });
  })
}

class SpriteSheet{
  constructor(image, width, height){
    this.image = image;
    this.width = width;
    this.height = height;
    this.tiles = new Map();
  }

  define(name, x, y){
    const buffer = document.createElement('canvas');
    buffer.width = this.width;
    buffer.height = this.height;
    buffer.getContext('2d')
      .drawImage(
        this.image,
        x * this.width,
        y * this.height,
        this.width,
        this.height,
        0,
        0,
        this.width,
        this.height
      );
      this.tiles.set(name, buffer);
  }

  draw(name, context, x, y){
    const buffer = this.tiles.get(name);
    context.drawImage(buffer, x, y)
  }
}

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

context.fillRect(0, 0, 50, 50);

loadImage('./img/tiles.png')
.then(image => {
  const sprites = new SpriteSheet(image, 16, 16);
  sprites.define('ground', 0, 0);
  sprites.draw('ground', context, 110, 88);

  console.log(4);
  context.drawImage(image, 0, 0, 16, 16, 32, 32, 16, 16);
});
