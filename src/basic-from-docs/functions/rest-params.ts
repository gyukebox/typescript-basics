// Rest parameters
// 말 그대로 "그 외 나머지 인자들"
// 배열 형태로 타입을 지정해주면 컴파일러가 알아서 배열을 생성해준다.

function buildName(firstName: string, ...restOfName: string[]) {
  return `${firstName} ${restOfName.join(" ")}`;
}

let franceSquadName = buildName("Zidane", "Henry", "Lizarazu", "Thuram");

function addAll(firstNum = 0, ...otherNums: number[]) {
  return (
    firstNum +
    otherNums.reduce((a: number, b: number): number => {
      return a + b;
    }, 0)
  );
}

let sums = addAll(2, 4, 1, 3, 5);

// ES6 으로 컴파일시 타입만 사라지는 모습을 볼수있지만
// ES5 로 컴파일시 for-iteration 으로 값을 일일이 넣어주는 모습 확인 가능
