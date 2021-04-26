export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'Kudo', underTwenty: false };

// how to write index signatures
// { [ index: typeForValue ]: typeForValue }

profile.name = 'Kudo';
profile.age = 23;
profile.nationality = 'Japan';