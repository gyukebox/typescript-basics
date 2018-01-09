// Static properties
// 클래스의 인스턴스를 만들지 않아도 된다.
// this 를 통해 접근하지 않고 클래스 명을 통하여 접근한다.

class Grid {
  public static origin = { x: 0, y: 0 };

  constructor(public scale: number) {}

  public calculateDistanceFromOrigin(point: { x: number; y: number }) {
    const xDist = point.x - Grid.origin.x;
    const yDist = point.y - Grid.origin.y;
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
}

let grid1 = new Grid(1.0);
let grid2 = new Grid(5.0);

console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
