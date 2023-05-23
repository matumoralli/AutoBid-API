const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
    // 401 unanuthorized
    if(req.user && req.user.isAdmin) next()
    else throw new ClientError("Only an admin can do this action.", 401);

}