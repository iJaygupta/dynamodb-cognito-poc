const AWS = require("aws-sdk");
AWS.config.update({ region: "ap-southeast-1" });

let cognito = new AWS.CognitoIdentityServiceProvider();

module.exports.loginManager = function(params) {
  return new Promise((resolve, reject) => {
    cognito.adminInitiateAuth(params, (err, data) => {
      if (err) {
        console.log("Error Occur While Log in::" + err);
        reject(err);
      } else {
        console.log("Successfully Login" + JSON.stringify(data));
        resolve(data);
      }
    });
  });
};
