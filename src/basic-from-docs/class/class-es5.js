// ES5 버전
// Greeter 는 생성자 함수인 것
var Greeter = (function() {
  function Greeter() {}
  // 클래스의 메소드는 prototype 을 사용해 표현하는 모습
  Greeter.prototype.greet = function() {
    if (this.greeting) {
      return "" + this.greeting;
    } else {
      return Greeter.standardGreeting;
    }
  };

  // 정적변수를 표기하는 방식
  Greeter.standardGreeting = "Hello, there";
  return Greeter;
})();

// 여기서 부터는 ES6 버전이랑 차이 없음. 단지 let, const 가 사라지고  var 로 바뀐것뿐
var greeter1 = new Greeter();
console.log(greeter1.greet());

var greeterMaker = Greeter;
greeterMaker.standardGreeting = "Hey there!";

var greeter2 = new greeterMaker();
console.log(greeter2.greet());
greeter2.greeting = "유하";
console.log(greeter2.greet());
