/* eslint-disable no-unused-vars */
function mapQuest(directions) {
  return directions.reduce((acc, currentDirection) => {
    let lastDirection = acc[acc.length - 1];
    if (
      (lastDirection === "N" && currentDirection === "S") ||
      (lastDirection === "S" && currentDirection === "N") ||
      (lastDirection === "E" && currentDirection === "W") ||
      (lastDirection === "W" && currentDirection === "E")
    ) {
      acc.pop();
    } else {
      acc.push(currentDirection);
    }
    return acc;
  }, []);
}
