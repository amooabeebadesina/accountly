
class JSONResponse {

    static sendSuccess(res, code, data) {
        return res.status(code).json(data);
    }

    static sendError(res, code, data=null) {
        return res.status(code).json(data);
    }
}

export default JSONResponse;
