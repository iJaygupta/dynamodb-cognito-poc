const AWS = require("aws-sdk");
AWS.config.update({ region: "ap-southeast-1" });

let cognito = new AWS.CognitoIdentityServiceProvider();

module.exports.confirmforgotPasswordManager = function (params) {
  return new Promise((resolve, reject) => {
    cognito.confirmForgotPassword(params, (err, data) => {
      if (err) {
        console.log("Error Occur While Password Reset:" + err);
        reject(err);
      } else {
        console.log("PassWord Reset Successfully " + JSON.stringify(data));
        resolve(data);
      }
    });
  });
};
