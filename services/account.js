import Account from '../models/account';


class AccountService {

    constructor() {
        this.accounts = [];
    }

    getBalance(accountId) {
        const account = this.accounts.find((account) => accountId === account.id);
        return account ? account.getBalance() : null;
    }

    getAccountById(accountId) {
        const account = this.accounts.find((account) => accountId === account.id);
        return account || null;
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

    withdrawFromAccount({ origin, amount }) {
        const accountIndex = this.accounts.findIndex((account) => origin === account.id);
        if (accountIndex === -1) {
            return null;
        }
        const account = this.accounts[accountIndex];
        account.removeFromBalance(amount);
        return account;
    }

    performTransfer({ origin, amount, destination }) {
        const originAccountIndex = this.accounts.findIndex((account) => origin === account.id);
        const destinationAccountIndex = this.accounts.findIndex((account) => destination === account.id);
        const originAccount = this.accounts[originAccountIndex];
        originAccount.removeFromBalance(amount);
        let destinationAccount;
        if (destinationAccountIndex === -1) {
            // Account does not exist. Create new destination account;
            const newAccount = new Account(destination, amount);
            this.accounts.push(newAccount);
            destinationAccount = newAccount
        } else {
            destinationAccount = this.accounts[destinationAccountIndex];
            destinationAccount.addToBalance(amount);
        }
        return { originAccount, destinationAccount };
    }

    resetAccounts() {
        this.accounts = [];
    }
}

export default AccountService;
