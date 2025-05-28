/* eslint-disable no-unused-vars */
function stringPlusPlus(str) {
  if (str === "") return "1";

  //Find the trailing number portion
  const match = str.match(/\d+$/);

  if (match) {
    //Extract the numeric part
    const numStr = match[0];
    //Convert the numeric part to a number,increment , then back to String
    const incrementedNum = (parseInt(numStr, 10) + 1).toString();
    //Preserve leading zeros by padding with original length
    const newNumStr = incrementedNum.padStart(numStr.length, "0");
    //Handle case where number length increases (eg 999 -> 1000)
    const finalNumStr =
      newNumStr.length > numStr.length ? incrementedNum : newNumStr;
    //Replace the old number with the new one
    return str.slice(0, match.index) + finalNumStr;
  } else {
    //if no number at the end , just append '1'
    return str + "1";
  }
}
