import Compositor from './compositor.js';
import {loadLevel} from './loaders.js';
import {loadBackgroundImage, loadMario} from './sprites.js';
import {createBackgroundLayer, createMarioLayer} from './layers.js';




const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

Promise.all([
  loadBackgroundImage(),
  loadMario(),
  loadLevel('0-0'),
]).then(([sprites, mario,level]) => {
  console.log(level);
  const comp = new Compositor();
  const backgroundLayer = createBackgroundLayer(level.backgrounds, sprites);
  comp.layers.push(backgroundLayer);

  const pos ={
    x: 64,
    y: 64,
  }

  const marioLayer = createMarioLayer(pos, mario);
  comp.layers.push(marioLayer);

  function update(){

    comp.draw(context);
    pos.x += 2;
    pos.y += 2;
    requestAnimationFrame(update);
  }

  update()

})
