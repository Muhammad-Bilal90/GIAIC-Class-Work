// class BankAccount {
//   balance: number;
//   protected accountNumber: number;
//   userName: string;

//   constructor(balan: number, accNumber: number, uName: string) {
//     this.balance = balan;
//     this.accountNumber = accNumber;
//     this.userName = uName;
//   }

//   get showAccNumber() {
//     return this.accountNumber;
//   }

//   set setAccNumber(val: number) {
//     this.accountNumber = val;
//   }

//   private showUserName(): void {
//     console.log(this.userName);
//   }
// }

// let myObj = new BankAccount(523421, 12345, "Riaz");
// myObj.setAccNumber = 7689;
// // myObj.
// // console.log(myObj.showAccNumber);

// class BankAccount1 extends BankAccount {
//   constructor(balance: number, accNumber: number, userName: string) {
//     super(balance, accNumber, userName);
//   }

//   get showAccountNumber() {
//     return this.accountNumber;
//   }
// }

// let acc2 = new BankAccount1(500000, 12345, "Riaz");
// // console.log(acc2.showAccNumber);
// // console.log(acc2.showAccountNumber);

abstract class livingThing {
  name: string;
  constructor(livigThingName: string) {
    this.name = livigThingName;
  }
  breathing() {
    console.log("this is from breathing method");
  }
  abstract move(): void;
}

// let human = new livingThing()

class Human extends livingThing {
  constructor(name: string) {
    super(name);
  }

  speaking() {
    console.log("human is speaking");
  }

  move(): void {
    console.log("human is walkings");
  }
}

let human1 = new Human("Riaz");

// human1.

// human1.
