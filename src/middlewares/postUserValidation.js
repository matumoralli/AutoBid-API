const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
  const { email } = req.params;
  const { name }  = req.body;
  if ( name, email) return next();
  else throw new ClientError("Neccesary fields missing", 400);
};
