let canvas;
let world;
let keyboard = new Keyboard();
let gameSound = false;
let gamePaused = false;
// let volumeLevel = 0.7;
let backgroundMusic = new Audio("audio/main_music.mp3");
backgroundMusic.loop = true;
let welcomeMessage = new Audio("audio/welcome_message.mp3");

function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
  world.draw();
  console.log("my character is", world.character);
}

function toggleBackgroundMusic(element) {
  if (gameSound) {
    backgroundMusic.pause();
    gameSound = false;
    element.innerHTML = "volume_off";
  } else {
    backgroundMusic.volume = 0;
    backgroundMusic.play();
    gameSound = true;
    element.innerHTML = "volume_up";
  }
}

window.addEventListener("keydown", (e) => {
  if (e.keyCode == 39) {
    keyboard.RIGHT = true;
  }
  if (e.keyCode == 37) {
    keyboard.LEFT = true;
  }
  if (e.keyCode == 38) {
    keyboard.UP = true;
  }
  if (e.keyCode == 40) {
    keyboard.DOWN = true;
  }
  if (e.keyCode == 32) {
    keyboard.SPACE = true;
  }
  if (e.keyCode == 68) {
    keyboard.D = true;
  }
});

window.addEventListener("keyup", (e) => {
  if (e.keyCode == 39) {
    keyboard.RIGHT = false;
  }
  if (e.keyCode == 37) {
    keyboard.LEFT = false;
  }
  if (e.keyCode == 38) {
    keyboard.UP = false;
  }
  if (e.keyCode == 40) {
    keyboard.DOWN = false;
  }
  if (e.keyCode == 32) {
    keyboard.SPACE = false;
  }
  if (e.keyCode == 68) {
    keyboard.D = false;
  }
});

function playAudio(url) {
  let audio = new Audio(url);
  audio.play();
}
