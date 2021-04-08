export {};

namespace Japanese{
  export class Person {
    constructor(public name: string) {}
  }
}

namespace English {
  export namespace Tokyo{
    export class Person {
      constructor(
        public firstClass: string,
        public middleName: string,
        public lastName: string
        ) {}
    }
  }

  export namespace Osaka {
    export class Person {
      constructor(
        public firstClass: string,
        public middleName: string,
        public lastName: string
        ) {}
    }
  }
}

const me = new Japanese.Person('Kodai');
console.log(me);

const michael = new English.Tokyo.Person('Michael', 'Joseph', 'Jackson');
console.log(michael);