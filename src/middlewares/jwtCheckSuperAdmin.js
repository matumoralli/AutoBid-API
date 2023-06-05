const { auth } = require("express-oauth2-jwt-bearer");

module.exports = auth({
  audience: process.env.JWT_CHECK_AUDIENCE,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
  tokenSigningAlg: "RS256",
  validators: {
    permissions: (claims) =>
      claims.includes(
        "create:users",
        "delete:users",
        "read:user_idp_tokens",
        "read:users",
        "update:users",
        "update:users_app_metadata",
      ),
  },
});
