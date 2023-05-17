const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
  const { name, email, password } = req.body;
  if ( name, email, password) return next();
  else throw new ClientError("Neccesary fields missing", 400);
};
