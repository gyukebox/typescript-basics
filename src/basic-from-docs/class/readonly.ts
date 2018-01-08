class Octopus {
  // Readonly
  // 필드가 readonly 일 경우 클래스 생성 때 반드시 초기화해줘야 함
  public readonly name: string;
  public readonly numberOfLegs: number = 8;
  constructor(theName: string) {
    this.name = theName;
  }
}

let dad = new Octopus("Man with the 8 strong legs");
// name 은 readonly 이기 때문에 재정의하지 못함!
// dad.name = "Man with the 3-piece suit";
