class Chicken extends MovableObject {
  y = 310;
  width = 80;
  height = 80;
  speed;
  // offsetY = 160;
  // offsetX = 160;
  offset = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };
  chickenDead = false;

  IMAGES_WALKING = ["img/3_enemies_chicken/chicken_normal/1_walk/1_w.png", "img/3_enemies_chicken/chicken_normal/1_walk/2_w.png", "img/3_enemies_chicken/chicken_normal/1_walk/3_w.png"];

  IMAGES_DEAD = ["img/3_enemies_chicken/chicken_normal/2_dead/dead.png"];

  constructor() {
    super().loadImage("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_DEAD);
    this.animate();
    this.x = 200 + Math.random() * 500;
    this.speed = 0.15 + Math.random() * 0.25;
  }

  chickenAnimateDead() {
    this.loadImages(this.IMAGES_DEAD);
    setTimeout(() => {
      this.IMAGES_DEAD = [];
    }, 500);
  }

  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);

    setInterval(() => {
      if (!this.chickenDead) {
        this.playAnimation(this.IMAGES_WALKING);
      } else {
        this.chickenAnimateDead();
      }
    }, 130);
  }

  deadChicken() {
    // this.chickenDead = true;
    this.playAnimation(this.IMAGES_DEAD);
  }
}
