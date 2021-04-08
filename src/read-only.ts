export {};

class VisaCard {
  constructor(public readonly owner: string) {
  }
}

let myVisaCard = new VisaCard('こうだい');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'kodai';