const AWS = require("aws-sdk");
AWS.config.update({ region: "ap-southeast-1" });

let cognito = new AWS.CognitoIdentityServiceProvider();

module.exports.signUpManager = function (params) {
  new Promise((resolve, reject) => {
    cognito.signUp(params, (err, data) => {
      if (err) {
        console.log("Error Occur While SignUp::" + err);
        reject(err);
      } else {
        console.log("Successfully SignUp::" + data);
        resolve(data);
      }
    });
  });
};
