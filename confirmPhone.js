const AWS = require("aws-sdk");
AWS.config.update({ region: "ap-southeast-1" });

const cognitoHelper = new AWS.CognitoIdentityServiceProvider();

exports.handler = async event => {
  var params = {
    UserAttributes: [
      {
        Name: 'phone_number_verified',
        Value: "true"
      },

    ],
    UserPoolId: 'ap-southeast-1_vDnQ1FgUN',
    Username: 'jay.gupta@creditculture.sg'
  };

  try {
    await cognitoHelper.adminUpdateUserAttributes(params).promise();
    const response = {
      statusCode: 200,
      data: "Phone Number Verified"
    };
    return response;

  } catch (err) {
    console.log(err, err.stack);
    const response = {
      statusCode: 400,
      ErrorMessage: err
    };
    return response;
  }
}

exports.handler().then(data => {
  console.log(data)
})