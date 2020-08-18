import JSONResponse from '../utils/response';
import Helpers from '../utils/helpers';

class AccountController {


    static getBalance(req, res) {
        try {

        } catch (err) {
            return Helpers.handleError(res, err);
        }
    }

    static performEventAction(req, res) {
        try {
            const { body } = req;
            console.log(body);
        } catch (err) {
            return Helpers.handleError(res, err);
        }
    }
}

export default AccountController;
