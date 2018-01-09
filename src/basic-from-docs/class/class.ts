// Class
// ES5 까지만해도 클래스는 함수(생성자역할)에 prototype 을 붙이는 형태로 사용했으나
// ES6부터는 class 를 지원함
// TS는 ES6스러운 클래스문법(java 등의 syntax 와 비슷함) 을 지원하고, 다중 ES 의 형태로 컴파일가능하다

class Greeter {
  public static standardGreeting = "Hello, there";
  public greeting?: string;

  public greet() {
    if (this.greeting) {
      return `${this.greeting}`;
    } else {
      return Greeter.standardGreeting;
    }
  }
}

// Class 는 동적인 면(인스턴스랑 관련) 과 정적인 면이 있다!

let greeter1: Greeter = new Greeter(); // 여기서 greeter1 은 인스턴스
console.log(greeter1.greet()); // Hello, there

let greeterMaker: typeof Greeter = Greeter; // Greeter 클래스의 레퍼런스를 만들어준다! (생성자를 복사해서 가진다고 생각)
// greeterMaker(Greeter 의 복사본) 의 정적 필드인 standardGreeting 을 변경. 하지만 원본은 아무런 변화가 없다!
greeterMaker.standardGreeting = "Hey there!";

let greeter2: Greeter = new greeterMaker(); // greeterMaker 의 인스턴스를 생성
console.log(greeter2.greet()); // Hey there!
greeter2.greeting = "유하"; // greeting 필드를 정의
console.log(greeter2.greet()); // 유하
