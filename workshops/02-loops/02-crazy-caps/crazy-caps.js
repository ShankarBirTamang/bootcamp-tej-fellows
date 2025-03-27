// YOUR CODE BELOW
const crazyCaps = (str) => {
    let newString = "";
    for(let i=0 ; i<str.length; i++){
        // if(i%2!==0){
        //     newString += str[i].toUpperCase();
        // }
        // else{
        //     newString += str[i].toLowerCase();
        // }
        newString += i%2===1 ? str[i].toUpperCase():str[i].toLowerCase();
    }
    return newString;
}

console.log(crazyCaps('fullstack is amazing'));