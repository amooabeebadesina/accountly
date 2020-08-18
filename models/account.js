
class Account {

    constructor(id, balance) {
        this.id = id;
        this.balance = balance;
    }

    getId() {
        return this.id;
    };

    getBalance() {
        return this.balance;
    }

    addToBalance(amount) {
        this.balance += amount;
    }

    removeFromBalance(amount) {
        this.balance -= amount;
    }
}

export default Account;
