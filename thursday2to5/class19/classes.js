"use strict";
class BankAccount {
    constructor(balan, accNumber, uName) {
        this.balance = balan;
        this.accountNumber = accNumber;
        this.userName = uName;
    }
    get showAccNumber() {
        return this.accountNumber;
    }
    set setAccNumber(val) {
        this.accountNumber = val;
    }
    showUserName() {
        console.log(this.userName);
    }
}
let myObj = new BankAccount(523421, 12345, "Riaz");
myObj.setAccNumber = 7689;
// myObj.
// console.log(myObj.showAccNumber);
class BankAccount1 extends BankAccount {
    constructor(balance, accNumber, userName) {
        super(balance, accNumber, userName);
    }
    get showAccountNumber() {
        return this.accountNumber;
    }
}
let acc2 = new BankAccount1(500000, 12345, "Riaz");
console.log(acc2.showAccNumber);
console.log(acc2.showAccountNumber);
