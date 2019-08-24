const AWS = require("aws-sdk");
AWS.config.update({ region: "ap-southeast-1" });

let cognito = new AWS.CognitoIdentityServiceProvider();

module.exports.logOutManager = function(params) {
  new Promise((resolve, reject) => {
    cognito.forgetDevice(params, (err, data) => {
      if (err) {
        console.log("Error Occur While Local Sign Out::" + err);
        reject(err);
      } else {
        console.log(
          "Sign Out from local device  Successfully" + JSON.stringify(data)
        );
        resolve(data);
      }
    });
  });
};
