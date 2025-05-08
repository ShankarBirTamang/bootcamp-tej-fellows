/* eslint-disable no-unused-vars */
function multipleMaps(values, maps) {
  let result = [];
  result = values.map((value) => {
    for (const map of maps) {
      if (value in map) {
        return map[value];
      }
    }
  });
  return result;
}
