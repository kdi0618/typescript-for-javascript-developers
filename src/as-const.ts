export {};

let name = 'Kodai';

name = 'Kudo';

let nickname = 'Kodai' as const;
nickname = 'Kodai';

let profile = {
  name: 'Kodai',
  height: 181,
} as const;

// profile.name = 'Kudo';
// profile.height = 182;