class Bottles extends MovableObject {
  width = 100;
  height = 100;

  // IMAGES = ["img/8_coin/coin_1.png", "img/8_coin/coin_2.png"];

  constructor(x, y, imagePath) {
    super();
    this.loadImage(imagePath);
    this.x = x;
    this.y = y;
  }

}