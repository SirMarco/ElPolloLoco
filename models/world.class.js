class World {
character = new Character();
level = level1;
background = new Image();
ctx;
xOffset = 90;
canvas;
keyboard;
camera_x = 0;
statusBar = new StatusBarHeart();
statusBarBottle  = new StatusBarBottle();
statusBarCoin  = new StatusBarCoin();
throwableObject = [];

constructor(canvas, keyboard){
this.ctx = canvas.getContext('2d');
this.canvas = canvas;
this.keyboard = keyboard;
this.draw();
this.setWorld();
this.run();
}

setWorld() {
  this.character.world= this;
}

run(){
  setInterval(() => {
    this.checkCollisions();
    this.checkThrowObjects();
    this.checkCollectCoins();
  }, 200);
}

checkThrowObjects() {
  if (this.keyboard.D) {
    let bottle = new ThrowableObject(this.character.x +100, this.character.y +100);
    this.throwableObject.push(bottle);
  }
}

checkCollisions(){
  this.level.enemies.forEach((enemey) => {
    if (this.character.isColliding(enemey)) {
      this.character.hit();
      this.statusBar.setPercentage(this.character.energy)
      console.log('Collision with character', this.character.energy);
    }
  });
}

checkCollectCoins() {
  this.level.coins.forEach((coin, i) => {
    if (this.character.isColliding(coin)) {
      this.character.collectCoin();
      this.statusBarCoin.collectCoins(this.character.coin);
      this.level.coins.splice(i, 1);
      if(!gamePaused) {
          playAudio('audio/coin.mp3');
      }
    }
  });
}


draw() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  this.ctx.translate(this.camera_x, 0);
  this.addObjectsToMap(this.level.backgroundsObjects);


  this.ctx.translate(-this.camera_x, 0);
  // ------ Space for fixed Object ---------
  this.addToMap(this.statusBar);
  this.addToMap(this.statusBarBottle);
  this.addToMap(this.statusBarCoin);
  this.ctx.translate(this.camera_x, 0); // Forwards


  this.addToMap(this.character);
  this.addToMap(this.level.clouds);
  this.addObjectsToMap(this.level.coins);
  this.addObjectsToMap(this.level.enemies);
  this.addObjectsToMap(this.throwableObject);
  this.ctx.translate(-this.camera_x, 0);

// sobald alles gezeichnet wurde, wird requestAnimationFrame() ausgeführt udn draw immer wieder aufgerufen
// this wird in der function nicht mehr erkannt -> deswegen self = this;

let self = this;
requestAnimationFrame(function name() {
  self.draw();
});

}

addObjectsToMap(objects) {
   objects.forEach(o => {
      this.addToMap(o)
    })
}

addToMap(mo) {
  if (mo.otherDirection) {
    this.flipImage(mo);
  }
  mo.draw(this.ctx);
  mo.drawBorder(this.ctx);
  if(mo.otherDirection) {
    this.flipImageBack(mo)
  }
}

flipImage(mo){
  this.ctx.save();
  this.ctx.translate(mo.width, 0);
  this.ctx.scale(-1,1);
  mo.x = mo.x * -1;
}

flipImageBack(mo) {
  mo.x = mo.x * -1;
  this.ctx.restore();
}
}
