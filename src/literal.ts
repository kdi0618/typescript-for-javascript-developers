export {};

// 文字のリテラル型
let dayOfTheWeek: '日'|'月'|'火'|'水'|'木'|'金'|'土' = '日';
dayOfTheWeek = '月';
// dayOfTheWeek = '31'; // stringだけど、意図しない文字列

// 数値のリテラル型
let month: 1|2|3|4|5|6|7|8|9|10|11|12 = 1;
month = 12;
// month = 13;

// booleanのリテラル型 : あまり実践で使わない
let TRUE: true = true;
// TRUE = false;