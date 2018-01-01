export function loadImage(url){
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

export function loadLevel(name) {
  return fetch(`/levels/${name}.json`)
  .then(r => r.json());
}
