const AWS = require("aws-sdk");
AWS.config.update({ region: "ap-southeast-1" });

let cognito = new AWS.CognitoIdentityServiceProvider();

module.exports.logOutManager = function(params) {
  new Promise((resolve, reject) => {
    cognito.adminUserGlobalSignOut(params, (err, data) => {
      if (err) {
        console.log("Error Occur While Sign Out::" + err);
        reject(err);
      } else {
        console.log("You Sign Out Successfully" + JSON.stringify(data));
        resolve(data);
      }
    });
  });
};
