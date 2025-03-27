// YOUR CODE BELOW
const myIndexOf = (source , searchValue , startIdx=0)=>{

    for(let i=startIdx ; i<=source.length-searchValue.length ;i++){
       
      let subString = source.slice(i,i+searchValue.length);
      if(subString === searchValue){
        return i;
        }   
    }
    return -1;
}

console.log(myIndexOf('hello', 'h'));
console.log(myIndexOf('hello', 'e'));
console.log(myIndexOf('hello', 'l'));
console.log(myIndexOf('hello', 'l'));
console.log(myIndexOf('hello', 'o'));
console.log(myIndexOf('twice twice', 'ice'));
console.log(myIndexOf('twice twice', 'ice', 5));
console.log(myIndexOf('happy string', 'sad'));
