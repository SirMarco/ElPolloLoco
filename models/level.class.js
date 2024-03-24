class Level {
  enemies;
  clouds;
  backgroundsObjects;
  level_end_x = 2500;
  coins;
  bottles;


  constructor(enemies,clouds,backgroundsObjects, coins, bottles){
    this.enemies = enemies;
    this.clouds = clouds;
    this.backgroundsObjects = backgroundsObjects;
    this.coins = coins;
    this.bottles = bottles;
  }
}