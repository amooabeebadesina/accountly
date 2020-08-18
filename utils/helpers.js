import JSONResponse from './response';

class Helpers {

    static handleError(res, err) {
        // handle application errors and log to sentry later
        return JSONResponse.sendError(res, 500, null);
    }
}

export default Helpers;
