class DrawableObject {
  img;
  imageCache = {};
  currentImage = 0;
  x = 80;
  y = 80;
  width = 200;
  height = 400;
  offset = {
    top: 25,
    left: 25,
    right: 25,
    bottom: 25,
  };

  // new Image ist bereits von JS gebeben, muss nicht neu definiert werden
  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  drawBorder(ctx) {
    if (this instanceof Character || this instanceof Chicken || this instanceof Coins || this instanceof Bottles || this instanceof LittleChicken) {
      ctx.beginPath();
      ctx.lineWidth = "2";
      ctx.strokeStyle = "blue";
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }
  }
}
