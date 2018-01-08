// Class
// ES5 까지만해도 클래스는 함수(생성자역할)에 prototype 을 붙이는 형태로 사용했으나
// ES6부터는 class 를 지원함
// TS는 ES6스러운 클래스문법(java 등의 syntax 와 비슷함) 을 지원하고, 다중 ES 의 형태로 컴파일가능하다

class Greeter {
  public greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  public greet() {
    return `Hello, ${this.greeting}!`;
  }
}

let greeter = new Greeter("world");
console.log(greeter.greet());
