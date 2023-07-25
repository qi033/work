const success = (msg, code, data) => {
    return {
        msg: msg || "success",
        code: code || -1,
        data: data || undefined,
    }
}
const error = (msg, code) => {
    return {
        msg: msg || "error",
        code: code || -1,
    };
};
module.exports = {
    success,
    error
}