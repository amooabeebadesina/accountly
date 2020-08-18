import JSONResponse from '../utils/response';
import Helpers from '../utils/helpers';
import AccountService from '../services/account';
const AccountServiceInstance = new AccountService();

class AccountController {


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
            switch (type.toLowerCase()) {
                case 'deposit':
                    const createdAccount = AccountServiceInstance.depositToAccount(req.body);
                    const responseData = {destination: { id: createdAccount.id, balance: createdAccount.balance}};
                    return JSONResponse.sendSuccess(res,  201, responseData);
                case 'withdraw':
                    console.log('withdraw');
                    break;
            }
        } catch (err) {
            console.log(err);
            return Helpers.handleError(res, err);
        }
    }
}

export default AccountController;
