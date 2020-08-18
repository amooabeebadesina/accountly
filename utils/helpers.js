import JSONResponse from './response';

class Helpers {

    static handleError(res, err) {
        // handle application errors and log to sentry later
        const msg = typeof err === 'string' ? err : 'Something went wrong';
        return JSONResponse.sendError(res, msg, 500);
    }
}

export default Helpers;
