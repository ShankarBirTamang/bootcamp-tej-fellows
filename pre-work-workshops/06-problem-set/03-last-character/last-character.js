// YOUR CODE BELOW
 const lastCharacter = (str1,str2)=>{
    let str1LastChar = str1.slice(-1);
    let str2LastChar = str2.slice(-1);
    return str1LastChar === str2LastChar;
 }

 console.log(lastCharacter('apples', 'pumpkins'));
 console.log(lastCharacter('marker', 'pen'));