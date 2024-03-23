class Chicken extends MovableObject {
  y =380
  width =80
  height=80
  speed;
  offsetY = 160;
  offsetX = 160;

  IMAGES_WALKING = [
    'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
  ]

  constructor(){
    super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
    this.loadImages(this.IMAGES_WALKING);
    this.animate();
    this.x=200 + Math.random() * 500;
    this.speed = 0.15 + Math.random() * 0.25;
    
   
  }

  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);


    setInterval(()=> {
      this.playAnimation(this.IMAGES_WALKING);
    },130)
  }


}
