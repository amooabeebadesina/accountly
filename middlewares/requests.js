import { performEventActionValidator } from './validators/account';
import JSONResponse from '../utils/response';

const performEventActionRequest = (req, res, next) => {
    const { body } = req;
    const validated = performEventActionValidator(body);
    if (validated.error) {
        return handleValidationError(validated, res);
    }
    return next();
};

const handleValidationError = (validatedData, res) => {
    const message = validatedData.error.details[0].message;
    return JSONResponse.sendError(res, 400, message);
};

export {
    performEventActionRequest
}
