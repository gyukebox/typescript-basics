let passcode = "secret passcode";

class Student {
  // 클래스 안의 필드는 private 으로 선언된 상태
  // 변수명 앞에 _ 붙이는거는 private field 에 대한 코딩 컨벤션이다.
  private _fullName: string;

  // 클래스 밖에서 fullName 을 부르면 이 함수가 호출되는 격이다
  get fullName(): string {
    return this._fullName;
  }

  // 클래스 밖에서 fullName 에 값을 변경하고자 하면 이 함수가 호출되는 격
  set fullName(newName: string) {
    if (passcode && passcode === "secret passcode") {
      this._fullName = newName;
    } else {
      console.error("ERROR: Authentication failed");
    }
  }
}

let student = new Student();
student.fullName = "Bob Smith"; // set 호출
if (student.fullName) {
  console.log(student.fullName); // get 호출
}

// ES5 이상의 버전으로 컴파일할 때만 지원된다.
// get 만 있고 set 이 정의되지 않은 경우는 자동으로 readonly 로 추론됨
// (.d.ts - type definition file 만들때 도움되는 테크닉)
