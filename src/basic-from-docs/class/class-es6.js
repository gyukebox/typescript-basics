class Greeter {
  greet() {
    if (this.greeting) {
      return `${this.greeting}`;
    } else {
      return Greeter.standardGreeting;
    }
  }
}
// JS 에서 static properties 들을 표현하는 방식
Greeter.standardGreeting = "Hello, there";

let greeter1 = new Greeter();
console.log(greeter1.greet());

// 클래스(정확히는 생성자) 를 하나 더 복사한 모습
// 여기서 정적 변수의 값을 바꿔주더라도 원본에는 변화가 없을것
let greeterMaker = Greeter;
greeterMaker.standardGreeting = "Hey there!";

let greeter2 = new greeterMaker();
console.log(greeter2.greet());
greeter2.greeting = "유하";
console.log(greeter2.greet());
