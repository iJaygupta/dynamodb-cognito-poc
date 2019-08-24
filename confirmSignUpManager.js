const AWS = require("aws-sdk");
AWS.config.update({ region: "ap-southeast-1" });

let cognito = new AWS.CognitoIdentityServiceProvider();

module.exports.confirmsignUpManager = function(params) {
  new Promise((resolve, reject) => {
    cognito.adminConfirmSignUp(params, (err, data) => {
      if (err) {
        console.log("Error Occur While SignUp::" + err);
        reject(err);
      } else {
        console.log("Successfully  confirmSignUp::" + data);
        resolve(data);
      }
    });
  });
};
