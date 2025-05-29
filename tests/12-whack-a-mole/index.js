let score = 0;
const scoreDisplay = document.getElementById("score");

const holes = document.querySelectorAll(".hole");

setInterval(function () {
  const randomHoleIndex = Math.floor(Math.random() * holes.length);
  holes[randomHoleIndex].classList.toggle("mole");
}, 300);

gameArea.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.matches(".mole")) {
    const hole = clickEvent.target;
    hole.classList.remove("mole");
    console.log("We hit a mole!");
    score++;
    scoreDisplay.innerHTML = score;
  }
});
