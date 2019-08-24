const AWS = require("aws-sdk");
AWS.config.update({ region: "ap-southeast-1" });

let cognito = new AWS.CognitoIdentityServiceProvider();

module.exports.forgotPasswordManager = function(params) {
  new Promise((resolve, reject) => {
    cognito.forgotPassword(params, (err, data) => {
      if (err) {
        console.log("Error Occur While forgot Password:" + err);
        reject(err);
      } else {
        console.log("Successfully done forgot Password" + JSON.stringify(data));
        resolve(data);
      }
    });
  });
};
