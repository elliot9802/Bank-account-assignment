// BANK ACCOUNT
const account = {
    accountName: "Elliot Segerlind",
    balance: 100,
  
    getBalance: function () {
      alert(`You have ${this.balance} in your ${this.accountName} account`);
      return atm();
    },
    deposit: function () {
      let amount = parseFloat(prompt("How much would you like to deposit?"));
      if (isNaN(amount) || amount <= 0 || amount === " ") {
        alert("You can only deposit numbers over 0");
      } else {
        this.balance = this.balance + amount;
        alert(`Deposit successful your balance is now ${this.balance}`);
      }
      return atm();
    },
    withdrawal: function () {
      let amount = parseFloat(prompt("How much would you like to withdraw?"));
      if (
        isNaN(amount) ||
        amount <= 0 ||
        amount === " " ||
        amount > this.balance
      ) {
        alert(
          "You can only withdraw numbers over 0 and that does not succeed your balance."
        );
        // Tried adding another alert if deposit was higher than account balance,
        // -but not sure how to stop it from withdrawing anyway
        // } else if (amount > this.balance) {
        //   alert (`You can not withdraw more than you have in your account.
        //   Your account balance is ${this.balance}`)
      } else {
        this.balance = this.balance - amount;
        alert(`Withdraw successful your balance is now ${this.balance}`);
      }
      return atm();
    },
    getAccountName: function () {
      alert(`Name of account: ${this.accountName}`);
      return atm();
    },
    accountError: function () {
      alert("Input is not valid try again");
      return atm();
    },
    exitAccount: function () {
      window.open("", "_parent", "");
      window.close();
    },
  };
  // STARTER FUNCTION
  function atm() {
    let choice = parseInt(
      prompt(
        `Select a choice 1.) See balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get account Name 5.) Exit`
      )
    );
  
    if (choice === 1) {
      account.getBalance();
    } else if (choice === 2) {
      account.deposit();
    } else if (choice === 3) {
      account.withdrawal();
    } else if (choice === 4) {
      account.getAccountName();
    } else if (choice === 5) {
      account.exitAccount();
    } else {
      account.accountError();
    }
  }
  atm();
  
  // You use parsefloat in the withdrawal and deposit function because it converts
  // the input to be read as a number/calculation instead of being read as a string("")
  // There is also parseInt which I believe makes it convert to be read as an number in order instead of calculation
  