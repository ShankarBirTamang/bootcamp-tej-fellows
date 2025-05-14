/* eslint-disable no-unused-vars, no-prototype-builtins */
function reduceRight(arr, start, combinerFunc) {
  let accumalator = start;
  for (let i = arr.length - 1; i >= 0; i--) {
    accumalator = combinerFunc(accumalator, arr[i]);
  }
  return accumalator;
}
