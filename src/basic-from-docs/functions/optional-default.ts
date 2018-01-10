// Optional parameters
// 매개변수명 뒤에 ? 을 붙여주면 해당 매개변수는 optional 하게 되며
// 값을 넣어주지 않을 경우 undefined 가 됨
function buildName(firstName: string, lastName?: string) {
  if (lastName) {
    return `${firstName} ${lastName}`;
  } else {
    return firstName;
  }
}

let result1 = buildName("Alex");
// let resutl2 = buildName("Alex", "Ferguson", "Sr."); too many params
let result2 = buildName("Alex", "Ferguson");

// Default parameters
// 해당 매개변수의 기본 값
// 인자로 값을 넣어주면 기본 값이 덮어씌워지게 되고, 아니면 기본값 그대로 사용함
// undefined 가 넘어가도 기본값이 그대로 사용됨
function distanceFromOrigin(point: { x: number; y: number }, scale = 1) {
  return scale * Math.sqrt(point.x * point.x + point.y * point.y);
}

let d1 = distanceFromOrigin({ x: 3, y: 2 });
let d2 = distanceFromOrigin({ x: 4, y: 3 }, 2.5);

// optional parameters 들은 나머지 매개변수가 온 후 맨 뒤에 위치해야 함
// default parameters 들은 그럴 필요는 없음
