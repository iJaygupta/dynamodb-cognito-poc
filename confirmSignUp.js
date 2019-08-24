const confirm = require("./confirmSignUpManager");

exports.handler = async event => {
  var params = {
    Username: "jay.gupta@creditculture.sg",
    UserPoolId: "ap-southeast-1_4LwLt1ZmR"
  };
  try {
    var res = await confirm.confirmsignUpManager(params);

    const response = {
      statusCode: 200,
      message: "You Signup Successfully",
      data: res
    };

    return response;
  } catch (err) {
    const response = {
      statusCode: 400,
      ErrorMessage: err
    };
    return response;
  }
};

exports.handler();
