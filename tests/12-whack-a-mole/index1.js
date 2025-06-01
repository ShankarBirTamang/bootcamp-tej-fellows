let myContainerDiv = document.getElementById("whack-a-mole");

let holes = document.getElementsByClassName("hole");
let hole3 = document.getElementsByClassName("3")[0];

console.dir(holes);
console.dir(hole3);

hole2.addEventListener("click", function (e) {
  console.log("you've clicked hole 3");
  // e.stopPropagation()
});

myContainerDiv.addEventListener(
  "click",
  function (sankar) {
    console.log("you've clicked whack-a-mole");
    // console.dir(sankar.target)
    // console.dir(sankar.target.classList.constructor.name)
    sankar.target.classList.add("goal");
    sankar.stopPropagation();
  },
  { capture: true }
);

let count = 0;

let myInterval = setInterval(function () {
  console.log("this is coming from set interval", count);
  count++;
  if (count === 2) {
    console.log("you are in 2");
    clearInterval(myInterval);
  }
}, 2000);
