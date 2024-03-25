function playGame() {
  let button = document.getElementById("playGame");
  let canvas = document.getElementById("canvas");
  button.classList.add("d-none");
  canvas.classList.remove("d-none");
  welcomeMessage.play(this);
  welcomeMessage.onended = function () {
    toggleBackgroundMusic(this);
  };
}
