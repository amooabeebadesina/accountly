import JSONResponse from '../utils/response';
import Helpers from '../utils/helpers';
import AccountService from '../services/account';
const AccountServiceInstance = new AccountService();

class AccountController {

    static resetAccounts(req, res) {
        try {
            AccountServiceInstance.resetAccounts();
            return JSONResponse.sendSuccess(res, 200, 'OK');
        } catch (err) {
            return Helpers.handleError(res, err);
        }
    }

    static getBalance(req, res) {
        try {
            const { account_id } = req.query;
            const balance = AccountServiceInstance.getBalance(account_id);
            if (!balance) {
                return JSONResponse.sendError(res, 404, 0);
            }
            return JSONResponse.sendSuccess(res, 200, balance);
        } catch (err) {
            return Helpers.handleError(res, err);
        }
    }

    static performEventAction(req, res) {
        try {
            const { type } = req.body;
            let responseData;
            switch (type.toLowerCase()) {
                case 'deposit':
                    const createdAccount = AccountServiceInstance.depositToAccount(req.body);
                    responseData = {destination: { id: createdAccount.getId(), balance: createdAccount.getBalance()}};
                    return JSONResponse.sendSuccess(res,  201, responseData);
                case 'withdraw':
                    const account = AccountServiceInstance.withdrawFromAccount(req.body);
                    if (!account) {
                        return JSONResponse.sendError(res, 404, 0);
                    }
                    responseData = {origin: { id: account.getId(), balance: account.getBalance()}};
                    return JSONResponse.sendSuccess(res,  201, responseData);
                case 'transfer':
                    const originAccountExisting = AccountServiceInstance.getAccountById(req.body.origin);
                    if (!originAccountExisting) {
                        return JSONResponse.sendError(res, 404, 0);
                    }
                    const { originAccount, destinationAccount } = AccountServiceInstance.performTransfer(req.body);
                    responseData = {
                        origin: { id: originAccount.getId(), balance: originAccount.getBalance() },
                        destination: { id: destinationAccount.getId(), balance: destinationAccount.getBalance() }
                    };
                    return JSONResponse.sendSuccess(res,  201, responseData);
            }
        } catch (err) {
            return Helpers.handleError(res, err);
        }
    }
}

export default AccountController;
