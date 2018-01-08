let passcode = "secret passcode";

class Student {
  private _fullName: string;

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (passcode && passcode === "secret passcode") {
      this._fullName = newName;
    } else {
      console.error("ERROR: Authentication failed");
    }
  }
}

let student = new Student();
student.fullName = "Bob Smith";
if (student.fullName) {
  console.log(student.fullName);
}
