const mostVowels = (sentence) => {
    let currentWord = '';
    let currentVowelCount = 0;

    let maxWord = '';
    let maxVowelCount = 0;

    for(let i=0; i<sentence.length ; i++){
        let char = sentence[i];
        if(char !== ' ' && i !==sentence.length-1){
            currentWord += char;
            if(isVowel(char)){
                currentVowelCount++;
            }
        }else {
            if(currentVowelCount > maxVowelCount){
                maxVowelCount = currentVowelCount;
                maxWord = currentWord;
            }
            currentWord = '';
            currentVowelCount = 0;
        }
    }
    return maxWord;
}

let vowels = "aeiouAEIOU";
const isVowel = (char) => vowels.includes(char);
console.log(mostVowels('I am a keeper with some real rhythms'));