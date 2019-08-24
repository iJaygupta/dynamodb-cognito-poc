const AWS = require("aws-sdk");
AWS.config.update({ region: "ap-southeast-1" });

let cognito = new AWS.CognitoIdentityServiceProvider();

module.exports.signUpManager = function(params) {
  new Promise((resolve, reject) => {
    cognito.resendConfirmationCode(params, (err, data) => {
      if (err) {
        console.log("Error Occur While Resend::" + err);
        reject(err);
      } else {
        console.log("Confirmation Resent Successfully" + JSON.stringify(data));
        resolve(data);
      }
    });
  });
};
