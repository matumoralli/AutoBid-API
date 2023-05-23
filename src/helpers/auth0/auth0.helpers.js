const axios = require("axios");
const { AUDIENCE, ISSUER_BASE_URL } = process.env;


async function auth0Helper(userID, action, data) {
  let auth0Response = "";

  const requestAccessToken = {
    method: "POST",
    url: `${ISSUER_BASE_URL}/oauth/token`,
    headers: { 'content-type': 'application/json' },
    body: `{"client_id":"SkGsvsrmTSKJT8Dp5U8B7ax1kufX3mSW","client_secret":"0dBJDeIwY25y04mTQIlo7cD9KtzztghB7GvhEtLOIKg4L8tV7jv6K6N7NZJ4WXfM","audience":"${AUDIENCE}","grant_type":"client_credentials"}` };

  await axios(requestAccessToken)
    .then(async function (response) {
      const token = response.data.access_token;
      console.log(
        "Auth0.controller got an access token:",
        token,
        "And this is the user info:",
        userID,
        action,
        data
      );
      let endPointRequest = "";

      switch (action) {
        case "block":
          endPointRequest = {
            method: "PATCH",
            url: `https://dev-ltm3bh0zvwyte1g5.us.auth0.com/api/v2/users/${userID}`,
            headers: {
              authorization: `Bearer ${token}`,
            },
            data: { blocked: true },
          };

          break;

        case "unblock":
          endPointRequest = {
            method: "PATCH",
            url: `https://dev-ltm3bh0zvwyte1g5.us.auth0.com/api/v2/users/${userID}`,
            headers: {
              authorization: `Bearer ${token}`,
            },
            data: { blocked: false },
          };

          break;

        case "get":
          endPointRequest = {
            method: "GET",
            url: `https://dev-ltm3bh0zvwyte1g5.us.auth0.com/api/v2/users`,
            headers: {
              authorization: `Bearer ${token}`,
            },
          };

          break;

        case "passwordChange":
          endPointRequest = {
            method: "PATCH",
            url: `https://dev-ltm3bh0zvwyte1g5.us.auth0.com/api/v2/users/${userID}`,
            headers: {
              authorization: `Bearer ${token}`,
            },
            data: { password: data },
          };

          break;

        case "emailChange":
          endPointRequest = {
            method: "PATCH",
            url: `https://dev-ltm3bh0zvwyte1g5.us.auth0.com/api/v2/users/${userID}`,
            headers: {
              authorization: `Bearer ${token}`,
            },
            data: { email: data, email_verified: false, verify_email: true },
          };

          break;

        case "makeAdmin":
          endPointRequest = {
            method: "POST",
            url: `https://dev-ltm3bh0zvwyte1g5.us.auth0.com/api/v2/users/${userID}/roles`,
            headers: {
              authorization: `Bearer ${token}`,
            },
            data: { roles: ["rol_2luoUkZRWwbEa3HT"] },
          };

          break;

        case "removeAdmin":
          endPointRequest = {
            method: "DELETE",
            url: `https://dev-ltm3bh0zvwyte1g5.us.auth0.com/api/v2/users/${userID}/roles`,
            headers: {
              authorization: `Bearer ${token}`,
            },
            data: { roles: ["rol_2luoUkZRWwbEa3HT"] },
          };

          break;

        default:
          console.log("Auth0.controller did not return any action");
      }
      console.log("Auth0.controller endPointRequest:", endPointRequest);
      await axios(endPointRequest)
        .then((response) => {
          auth0Response = response.data;
        })
        .catch((error) => {
          console.log("There has been an error running Auth0.controller:", error);
        });
    })
    .catch(function (error) {
      console.log("There has been an error in Auth0.controller requesting an access token:", error);
    });

  return auth0Response;
};

module.exports = {auth0Helper};
