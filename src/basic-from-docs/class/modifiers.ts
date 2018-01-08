class Person {
  // Protected field
  // 해당 클래스 및 파생된 클래스 밖에서는 접근할 수 없다
  protected name: string;

  // 생성자도 protected 일 수 있음
  // 이 경우 이 클래스의 인스턴스 생성은 불가, 상속받아서 확장만 가능
  protected constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person {
  // Private field
  // 해당 클래스 밖에서는 접근할 수 없다
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name);

// TS 클래스의 필드는 기본적으로 public 이다. (default IS public)
