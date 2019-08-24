const login = require("./loginManager");

exports.handler = async event => {
  var params = {
    AuthFlow: "ADMIN_NO_SRP_AUTH",
    ClientId: "46l57acg5t0f93dcttalmr97ha",
    UserPoolId: "ap-southeast-1_kIr3XQM7S",
    AuthParameters: {
      USERNAME: "jay.gupta@creditculture.sg",
      PASSWORD: "jayKUMAR%"
    }
  };
  try {
    var res = await login.loginManager(params);

    const response = {
      statusCode: 200,
      message: "Successfully Logged in",
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
