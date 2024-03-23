class Cloud extends MovableObject {
  y=-30
  width=720

constructor(){
  super().loadImage('img/5_background/layers/4_clouds/full.png');
  this.x = 0 + Math.random() * 900;
  this.animate()
}

animate(){
this.moveLeft();
}


}