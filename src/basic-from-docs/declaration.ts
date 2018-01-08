/*
 * TypeScript 에서의 변수선언
 * 현재 JS의 문법체계는 ES6. var, let, const 사용가능
 * ES6에서 var 대신 let, const 를 사용하는것처럼, TS 도 비슷하나 셋다 가능하긴하다
 */

// 스코프
// var 로 선언하면 그 변수의 범위는 함수전체이다!
// if문 안에서 변수선언이 되었지만 그 변수를 리턴할 수 있는 이유도 여기 있다
function f(shouldInitialize: boolean) {
  if (shouldInitialize) {
    var x = 10;
  }
  return x;
}
f(true);
f(false);

// 함수전체 스코프의 부작용
// 이 함수에서 안쪽 for 문을 돌면서 전체 i는 덮어씌워질 것이다(한마디로 요상하게 작동할 거라는 뜻)
function sumMatrix(matrix: number[][]): number {
  var sum = 0;
  for (var i = 0; i < matrix.length; i++) {
    var currentRow = matrix[i];
    for (var i = 0; i < currentRow.length; i++) {
      sum += currentRow[i];
    }
  }
  return sum;
}

// 우리가 원했던 결과 : 0 1 2 3 4 5 6 7 8 9
// 실제로 나오는 결과 : 10 10 10 10 10 10 10 10 10 10
for (var i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i);
  }, 100 * i);
}

// 일단 애초에 setTimeout 으로 넘어가는 함수는 콜백이기 때문에 for문이 다 돌고나서야 실행되는 부분
// 따라서 i의 값은 항상 10이 담겨있다
// 따라서 다음과 같은 IIFE(즉발함수?) 를 이용해서 i의 상태를 반복할때 잡아줘야한다

for (var i = 0; i < 10; i++) {
  (function(i) {
    setTimeout(function() {
      console.log(i);
    }, 100 * i);
  })(i);
}

// 하지만 let 을 쓴다면?
for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100 * i);
}

// Destructuring
let input = [1, 2];
let [first, second] = input;
