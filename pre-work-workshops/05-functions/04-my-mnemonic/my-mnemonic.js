// YOUR CODE BELOW

const myMnemonic = (...words) => {
    let newString = '';
    let firstChar='';
    let wordsLength = words.length < 4 ? words.length : 4;
    for(let i=0; i< wordsLength; i++){
        firstChar = words[i][0];
        newString += firstChar;
    }
    return newString;
}

console.log(myMnemonic('Must', 'Accept', 'Sugar', 'Happiness'));
console.log(myMnemonic('We', 'Eat', 'Eggs'));