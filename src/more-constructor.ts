export {};

class Person {
  constructor(public name: string, protected age: number) {}
}

const me = new Person('kodai', 23);
console.log(me);