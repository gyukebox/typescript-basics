/**Generics
 *
 */

function anyIdentity(arg: {}): {} {
  return arg;
}

// Generic 을 사용하는 방법
function identity<T>(arg: T): T {
  return arg;
}

// Generic 을 사용하는 함수를 호출하는 방법
// 명시적으로 <> 을 사용하여 타입을 명시할 필요가 없다. 컴파일러가 알아서 추론해줌
let output = identity<string>("myString");
let anotherOutput = identity("otherString");

/**
 *
 */
function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}
