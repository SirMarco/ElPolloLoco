class Level {
  enemies;
  clouds;
  backgroundsObjects;
  level_end_x = 2500;
  coins;


  constructor(enemies,clouds,backgroundsObjects, coins){
    this.enemies = enemies;
    this.clouds = clouds;
    this.backgroundsObjects = backgroundsObjects;
    this.coins = coins;
  }
}