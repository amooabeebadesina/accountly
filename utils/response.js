
class JSONResponse {

    static sendSuccess(res, msg, code, data) {
        const resData = {
            status: true,
            message: msg,
            data
        };
        return res.status(code).json(resData);
    }

    static sendError(res, msg, code, data=null) {
        const resData = {
            status: false,
            message: msg,
            data
        };
        return res.status(code).json(resData);
    }
}

export default JSONResponse;
