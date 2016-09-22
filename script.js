class Atm {
  constructor(type){
    this.type = type;
    this.money = 0;
    this.transactionHistory = [];
  }
  withdraw(amount){
    this.money -= amount;
    this.transactionHistory.push(-amount)
  }
  deposit(amount){
    this.money += amount;
    this.transactionHistory.push(amount)
  }
  showBalance(){
    console.log("The current balance is:", this.money);
  }
}

let savings = new Atm("savings");
