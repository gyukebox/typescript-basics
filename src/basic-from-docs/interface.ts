// Interface
// JS 의 object 로 컴파일
// 네이밍은 대문자 I로 시작하는게 컨벤션

interface IPerson {
  firstName: string;
  lastName: string;
}

function greeting(person: IPerson): string {
  return `Hello, ${person.firstName}!`;
}

let newPerson: IPerson = { firstName: "Byeong Gyu", lastName: "Choi" };
console.log(greeting(newPerson));

// Optional properties
// 변수명 뒤에 ? 붙이면 optional 하게 변함
// 정의되지 않은 속성을 쓰는 것을 방지할 수 있다!
interface ISquareConfig {
  color?: string;
  width?: number;
  // 이외에도 속성이 추가될 수 있을 경우에는,
  [propName: string]: {};
}

function createSquare(config: ISquareConfig): { color: string; area: number } {
  const newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({ color: "turqoise" });

// Readonly properties
// 속성을 "읽기 전용" 으로 만든다
// 처음 리터럴을 생성할 때만 값을 넣을수 있다. 재정의는 불가
interface IPoint {
  readonly x: number;
  readonly y: number;
}

// 특히 배열의 값을 불변으로 만드는 데 상당히 용이함
// 배열 타입의 메소드 또한 삭제되어 버린다
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // 이런거 하면 에러 뜬다
// ro.push(5);

// Excess Property Checks
// Interface 에 없는 속성을 넣으면 에러가 난다. 하지만, 타입간주를 통해서 피해갈 수는 있다.
let anotherSquare = createSquare({
  colour: "red",
  width: 100,
} as ISquareConfig);

// 하지만 추가 속성을 가지도록 정의할 수는 있다(ISquareConfig 수정)
// 마지막으로 따로 객체를 만들어 준 다음 변수로 넘겨주면 excess property check 에 걸리지 않는다!
let squareOptions = { colour: "red", width: 100 };
let thirdSquare = createSquare(squareOptions);

// 하지만 절대로 excess property check 을 피하려고 하면 안되고,
// 이런 문제가 생기면 타입선언에 문제가 있을 수가 있으니 타입선언을 다시 수정하자

// 인터페이스는 함수도 속성으로 받아들일 수 있다!

/*
 * 일반적인 인터페이스 정의방식을 따르면 이렇게 쓰겠지만 TSLint는 아래와 같은 syntax를 쓰길 원함
 * interface SearchFunc {
 *  (source: string, subString: string): boolean;
 * }
 */
type SearchFunc = (source: string, subString: string) => boolean;

let mySearch: SearchFunc;

// function parameter 의 이름은 일치하지 않아도 된다
mySearch = function(src: string, sub: string): boolean {
  const result = src.search(sub);
  return result > -1;
};

// 타입 명시를 안하면 컴파일러가 타입을 추론해서 적절하게 붙여준다
// 물론 추론한 타입이랑 실제 함수가 리턴한 값의 타입이 불일치하면 에러난다
// (이런건 근데 TS스럽지 않아서 이렇게 쓰고싶지는 않다)
mySearch = function(src, sub) {
  return src.search(sub) > -1;
};

// Indexable types
// "인덱싱이 가능하도록" 만들어놓은 타입
// 인덱스는 number 이나 string 타입만 허용되지만, number 만 쓰는게 좋을듯
// JS가 number 을 string으로(100 -> "100") 한번 바꾼다음에 인덱싱을 하기때문임
interface IStringArray {
  [index: number]: string;
}
let myArray: IStringArray = ["Bob", "Fred"];
let myStr: string = myArray[1];

// 인덱스를 readonly 로 만들면 원치 않는 assignment 를 방지할 수 있다.
interface IReadOnlyStringArray {
  readonly [index: number]: string;
}
let myStringArray: IReadOnlyStringArray = ["Alice", "Bob"];
// myStringArray[2] = "Fred"; // 이런걸 막아준다는 소리
