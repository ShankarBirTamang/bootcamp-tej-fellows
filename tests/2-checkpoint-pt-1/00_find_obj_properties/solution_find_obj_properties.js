
function findObjPropsHasOwn(obj) {
  keys = [];
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  return keys.join(", ");
}



// ---- 2nd part

function findObjKeys(obj) {
  return Object.keys(obj).join(", ");
}
