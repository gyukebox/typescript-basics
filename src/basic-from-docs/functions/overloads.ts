// JS는 dynamic 한 언어기 때문에 한 함수에서 다른 종류의 타입의 object가 리턴될 수 있음

let suits = ["hearts", "spades", "clubs", "diamonds"];

// 이런 상황을 type system 에 설명하는 방법은 함수에 여러가지 형태를 제공하는것(overloading)
// Deck 을 넘겨주면 카드를 하나 뽑아 리턴한다.
// Card 를 넘겨주면 해당 카드에 대한 detail 을 리턴한다.
function pickCard(x: Array<{ suit: string; card: number }>): number;
function pickCard(x: number): { suit: string; card: number };
function pickCard(x: any): any {
  if (typeof x === "object") {
    const pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  } else if (typeof x === "number") {
    const pickedSuit = Math.floor(x / 13);
    return { suit: suits[pickedSuit], card: x % 13 };
  }
}

let myDeck = [
  { suit: "diamonds", card: 2 },
  { suit: "spades", card: 10 },
  { suit: "hearts", card: 4 }
];
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
