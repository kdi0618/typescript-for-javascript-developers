export {};

type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

const example1 = {
  name: 'Kodai',
  age: 23
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: 'Kodai',
  age: 23
};

type Profile2 = typeof example1; // 元の値を変更した場合でも、typeofが追従してくれる