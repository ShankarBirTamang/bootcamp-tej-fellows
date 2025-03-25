let boolean1 = false, boolean2 = true;
// let boolean1 = true, boolean2 = false;
// let boolean1 = false, boolean2 = true;
// let boolean1 = false, boolean2 = false;

let result;

// YOUR CODE BELOW

result = boolean1===true && boolean2 ===true ? 'both': 
    boolean1===true && boolean2 === false || boolean1 === false && boolean2 === true ? 'one': 'none';

    console.log(result);

   