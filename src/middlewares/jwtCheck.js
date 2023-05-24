const { auth } = require('express-oauth2-jwt-bearer');

module.exports =  auth({
  audience: process.env.JWT_CHECK_AUDIENCE,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
  tokenSigningAlg: 'RS256'
});