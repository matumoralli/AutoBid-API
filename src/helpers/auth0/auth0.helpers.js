const axios = require("axios");
const { TOKEN_URL, CLIENT_ID,  CLIENT_SECRET, AUTH0_HELPER_AUDIENCE } = process.env;


async function auth0Helper(userID, action, data) {
  let auth0Response = "";

  const requestAccessToken = {
    method: "POST",
    url: `${TOKEN_URL}`,
    headers: { 'content-type': 'application/json' },
    body: `{"client_id":"${CLIENT_ID}","client_secret":"${CLIENT_SECRET}","audience":"${AUTH0_HELPER_AUDIENCE}","grant_type":"client_credentials"}`
  };

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
