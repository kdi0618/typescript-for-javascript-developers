export {};

type Profile = {
  name: string,
  age: number,
};

const me: Profile = {
  name: 'Kudo',
  age: 23,
};

me.age++;
console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'Kudo',
  age: 23,
};

// friend.age++; // readonlyだから、変更できない

type YomitoriSenyo<T> = {
  readonly [P in keyof T]: T[P];
};
type YomitoriSenyoProfile = YomitoriSenyo<Profile>;