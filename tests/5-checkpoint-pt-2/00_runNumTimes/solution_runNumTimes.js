/* eslint-disable no-unused-vars */
function runNumTimes(callback,numTimes){
    for(let i=0 ; i<numTimes;i++){
         callback();
   }
}

let myString = '';
runNumTimes(() => {
    myString += 'hello';
    return myString;
  }, 3
);

console.log(myString);
  
let myArray = [];
let count = 1;
runNumTimes(() => {
    myArray.push(count);
    count++;
  }, 5);

  console.log(myArray);
  