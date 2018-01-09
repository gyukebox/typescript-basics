// Abstract class
// 해당 클래스의 인스턴스를 바로 만드는건 허용되지 않고, 단순 확장용

abstract class Department {
  constructor(public name: string) {}

  public printName(): void {
    console.log(`Department name: ${this.name}`);
  }

  // Abstract method
  // 무조건 확장하는 클래스에서 구현해야 하는 부분
  public abstract printMeeting(): void;
}

class AccountingDepartment extends Department {
  constructor() {
    // 확장하는 클래스에서는 무조건 super() 을 불러야 함
    super("Accounting and auditing");
  }

  public printMeeting(): void {
    console.log("The Accounting Department meets each Monday at 10am.");
  }

  public generateReports(): void {
    console.log("Generating accounting reports...");
  }
}

// let department: Department; 추상타입의 레퍼런스는 가능
// department = new Department(); 추상클래스의 인스턴스를 생성할 수 없음!
let department: Department = new AccountingDepartment();

department.printName();
department.printMeeting();
// department.generateReports(); 선언된 추상타입에 해당 메소드는 존재하지 않기 때문에 에러!
