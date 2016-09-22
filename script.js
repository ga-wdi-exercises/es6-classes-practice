class Atm {
  constructor(type, backup=null){
    this.type = type;
    this.money = 0;
    this.transactionHistory = [];
    this.backupAccount = backup;
  }
  withdraw(amount){
    this.money -= amount;
    this.transactionHistory.push(-amount);
    if(this.money < 0){
      console.log(`Dipping into ${this.backupAccount.type}!`);
      let difference = -this.money;
      this.money = 0;
      this.backupAccount.withdraw(difference);
    }
  }
  deposit(amount){
    this.money += amount;
    this.transactionHistory.push(amount);
  }
  showBalance(){
    console.log("The current balance is:", this.money);
  }
}

let savings = new Atm("savings");
let checking = new Atm("checking", savings);
