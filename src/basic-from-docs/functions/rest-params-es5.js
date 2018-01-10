function buildName(firstName) {
  var restOfName = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    restOfName[_i - 1] = arguments[_i];
  }
  return firstName + " " + restOfName.join(" ");
}
var franceSquadName = buildName("Zidane", "Henry", "Lizarazu", "Thuram");

function addAll(firstNum) {
  if (firstNum === void 0) {
    firstNum = 0;
  }
  var otherNums = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    otherNums[_i - 1] = arguments[_i];
  }
  return (
    firstNum +
    otherNums.reduce(function(a, b) {
      return a + b;
    }, 0)
  );
}
var sums = addAll(2, 4, 1, 3, 5);
