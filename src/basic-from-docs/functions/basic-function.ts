// functions
// named function 으로 정의할 수 있고,
// (변수에 다 타입이 달려 있는 데 주목)

function add(x: number, y: number): number {
  return x + y;
}

// 이렇게 변수를 function type 으로 만드는 방법도 있다(함수는 일급객체)
// 단지 "함수 타입" 이 아닌 "이런 매개변수가 들어가서 이런 리턴이 나오는" 함수 타입(specific)
// (parameters) => return type 형식으로 타입을 정의하는 모습
// 리턴하는 값이 없는 경우에는 void 를 쓰면 되는 부분이다.
let myAdd: (baseValue: number, increment: number) => number = function(
  x: number,
  y: number
): number {
  return x + y;
};

// 타입 추론(contexual typing)
// TS 컴파일러가 타입을 추론하여 위에 myAdd 와 같은 타입이겠거니 하는 것
// 타입 붙이는 것을 줄여주는데 엄청 도움되는 면이 있다!
let myAdd2 = function(x: number, y: number): number {
  return x + y;
};

// 화살표 함수로도 표현이 가능하다 다음과 같은식으로
let myAdd3 = (x: number, y: number): number => {
  return x + y;
};
