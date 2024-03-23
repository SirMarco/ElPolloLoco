class MovableObject extends DrawableObject {
  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  acceleration = 2.5;
  energy = 100;
  lastHit = 0;
  coin = 0;


applyGravity() {
  setInterval(()=> {
    if(this.isAboveGround() || this.speedY > 0) {
      this.y -= this.speedY;
      this.speedY -= this.acceleration;
    }
  }, 1000 / 25)
}

isAboveGround() {
  if (this instanceof ThrowableObject) { // Throwable Object should always fall
    return true;
  } else {
    return this.y < 170;
  }
}



// Bessere Formel zur Kollisionsberechnung (Genauer)
isColliding (obj) {
  return  (this.x + this.width) >= obj.x && this.x <= (obj.x + obj.width) && 
          (this.y + this.offsetY + this.height) >= obj.y &&
          (this.y + this.offsetY) <= (obj.y + obj.height)
}

hit() {
  this.energy -=30;
  if(this.energy < 0){
    this.energy = 0;
  } else {
    this.lastHit = new Date().getTime();
  }
}

isHurt() {
  let timepassed = new Date().getTime() - this.lastHit; // differnce in ms
  timepassed = timepassed / 1000; 
  return timepassed < 0.5;
}

isDead() {
  return this.energy == 0;
}

playAnimation(images){
  let i = this.currentImage % images.length; //let i = 7 % 6; => 1, Rest 1
  // i = 0,1,2,3,4,5,0,1,2,3,4,5,0,1,2,3,4,5,0,1,2,3,4,5,0,1,2,3,4,5,0,1,2,3,4,5,
  let path = images[i];
  this.img = this.imageCache[path];
  this.currentImage++
}

moveRight() {
  this.x += this.speed;
}

moveLeft () {
  this.x -= this.speed;
}

jump() {
  this.speedY = 30;
}


collectCoin() {
  this.coin += 1;
  if (this.coin > 2) {
      this.coin = 3;
  }
}
}
