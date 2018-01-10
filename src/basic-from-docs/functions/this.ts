interface Card {
  suit: string;
  card: number;
}

interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck): () => Card;
}

let myDeck: Deck = {
  suits: ["hearts", "spdaes", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker(this: Deck) {
    return () => {
      const pickedCard = Math.floor(Math.random() * 52);
      const pickedSuit = Math.floor(pickedCard / 13);

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  }
};

let myCardPicker = myDeck.createCardPicker();
let myPickedCard = myCardPicker();

alert(`card: ${myPickedCard.card} of ${myPickedCard.suit}`);

// if I want to make this to be unusuable...
function f(this: void): number {
  return 0;
}
