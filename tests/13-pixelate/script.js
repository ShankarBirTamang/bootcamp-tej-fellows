// Your code here
/*
- adding a new element to html page
    - document.createElement
    - parentElement.appendChild(newElement)
- adding eventlistener to 'select' element
    - what event should we listen to?
- dragging to paint
    - mousedown: addEventListener
    - mouseover: do the action
    - mouseup: removeEventListener
*/
let mySelect = document.getElementsByTagName("select")[0];
let myFirstOption = document.createElement("option");
myFirstOption.innerText = "blueButton";
myFirstOption.value = "blue";
mySelect.appendChild(myFirstOption);

let mySecondOption = document.createElement("option");
mySecondOption.innerText = "redButton";
mySecondOption.value = "red";
mySelect.appendChild(mySecondOption);

mySelect.addEventListener("change", function (sankar) {
  console.log(sankar.target.value);
});
