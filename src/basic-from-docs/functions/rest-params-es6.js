function buildName(firstName, ...restOfName) {
  return `${firstName} ${restOfName.join(" ")}`;
}
let franceSquadName = buildName("Zidane", "Henry", "Lizarazu", "Thuram");

function addAll(firstNum = 0, ...otherNums) {
  return (
    firstNum +
    otherNums.reduce((a, b) => {
      return a + b;
    }, 0)
  );
}
let sums = addAll(2, 4, 1, 3, 5);
