export {};

let numbers: number[] = [1, 2, 3];
console.log({ numbers });
// 以下は非推奨な書き方
let numbers2: Array<number> = [1, 2, 3];

/**
 * 二次元配列のアノテーション
 */
let nijigen: number[][] = [
  [50, 100],
  [20, 200]
];

let array: (string | number | boolean)[] = [1, 'Tokyo', true];