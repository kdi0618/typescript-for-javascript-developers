export {};

let profile: object = { name: 'Kodai' };
profile = { birthyear: 1997 };

let profile2: {
  name: string;
} = { 
  name: 'Kodai'
};
// profile2 = { birthYear: 1997 }; // エラーを吐く