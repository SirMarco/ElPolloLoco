class Coins extends MovableObject {
  x = 300;
  y = 100;
  width = 120;
  height = 120;

  IMAGES = ["img/8_coin/coin_1.png", "img/8_coin/coin_2.png"];

  constructor() {
    super();
    this.loadImage(this.IMAGES[0]);
    this.loadImages(this.IMAGES);
    // this.x = this.x + Math.random();
    // this.y = this.height + Math.random() * 180;
    // this.animate();
    this.x = x;
    this.y = y;
  }

  animate() {
    setInterval(() => this.playAnimation(this.IMAGES), 500);
  }
}