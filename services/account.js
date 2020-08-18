import Account from '../models/account';


class AccountService {

    constructor() {
        this.accounts = [];
    }

    getBalance(accountId) {
        const accountIndex = this.accounts.findIndex((account) => accountId === account.id);
        if (accountIndex === -1) {
            return null;
        }
        return this.accounts[accountIndex].getBalance();
    }

    depositToAccount({ destination, amount }) {
        const accountIndex = this.accounts.findIndex((account) => destination === account.id);
        if (accountIndex === -1) {
            // Account does not exist. Create new account;
            const newAccount = new Account(destination, amount);
            this.accounts.push(newAccount);
            return newAccount;
        } else {
            const account = this.accounts[accountIndex];
            account.addToBalance(amount);
            return account;
        }
    }
}

export default AccountService;
