/* eslint-disable no-unused-vars */
const setPropsOnObj = (obj) => {
  obj.x = 7;
  obj["y"] = 8;
  obj.onePlus = (num) => num + 1;
};

const setPropsOnArr = (arrObj) => {
  arrObj.hello = () => "Hello!";
  arrObj["full"] = "stack";
  arrObj[0] = 5;
  arrObj.twoTimes = (num) => num * 2;
};

const setPropsOnFunc = (functionObject) => {
  functionObject.year = "20??";
  functionObject.divideByTwo = (num) => num / 2;
};

const shallowCopy = (firstArray, secondArray) => {
  if (Array.isArray(firstArray)) return [...firstArray, ...secondArray];
  return { ...firstArray, ...secondArray };
};
