export {};

class Me {
  static isProgramer: boolean = true;
  static firstName: string = 'Kodai';
  static lastName: string = 'Kudo';

  static work() {
    // return "Hey, guys! Are you interested in TypeScript? Let's dive into TypeScript!";
    return `Hey, guys! This is ${this.firstName} Are you interested in TypeScript? Let's dive into TypeScript!`;
  }
}

let me = new Me();
// console.log(me.isProgramer); // 初期化したクラスでは静的メンバは呼び出せない
console.log(Me.isProgramer);
console.log(Me.work());
