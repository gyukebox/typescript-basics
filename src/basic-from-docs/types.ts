/*
 * TypeScript 기본 타입 신택스
 * let variableName: Type = value;
 */

// boolean
let isDone: boolean = false;

// numbers
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// string
let color: string = "blue";
color = "red";

// Array
let list: number[] = [1, 2, 3];
// Generic array. Array<T> 형태로 쓰이지만, simple type 의 경우에는 T[]의 형태로 그냥 쓰자

// Tuple
let x: [string, number]; // declaration
x = ["Hello", 10];
// x = [10, "Hello"]; // 잘못정의하면 당연히 에러남

let y: [string, number, boolean] = ["Jane", 14, false]; // 한번에 해도 되는듯?

// Enum
enum Months {
  January,
  Feburary,
  March,
}
let m: Months = Months.March;

// Any
// 뭐든지 들어갈 수 있다. 너무 JS스러운 타입.
let notSure: {} = 4;
notSure = "maybe it is a string?";
// 배열에 들어가는 타입이 가지각색일때도
let anyTypeList: {} = ["Hello", 100, [1, 2, 3], true, "shipal"];

// void
function warnUser(): void {
  alert("Warning !!!");
}
// 일반 변수가 void type 일 경우에는 null 이나 undefined 만 정의될 수 있음
let voidVar: void;

// Never
// "절대 일어나지 않는 일" 에 대한 타입
// 예를들면 함수에서 리턴을 할일이 없이 에러를 호출한다던가 등의 경우
function throwError(message: string): never {
  throw new Error(message);
}

function fail() {
  return throwError("Something must be wrong");
}

// never 을 리턴하는 함수의 경우 unreachable 한 코드여야 한다(물론 이딴 구린 형태로 쓰면 안되겠지만)
function infiniteLoop(): never {
  while (true) {
    alert("Blood trail!!");
  }
}

// Type Assertions
// 어떤 변수의 타입을 하나로 간주하고 사용하는방법
let foo: {} = "This is a string";

// 꺽쇠에 넣어서 쓰는 방법이랑
let stringLength: number = (foo as string).length;
// "as" syntax 를 쓰는 방법이 있음. TSLint 는 as 를 권장하는듯
stringLength = (foo as string).length;
