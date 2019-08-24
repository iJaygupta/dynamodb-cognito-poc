const forgotPassword = require("./confirmForgotPasswordManager");

exports.handler = async event => {
  var params = {
    ClientId: "7ov2gppj7qim9poub8k5pscahn",
    ConfirmationCode: "528286",
    Password: "111111",
    Username: "jay.gupta@creditculture.sg"
  };
  try {
    var res = await forgotPassword.confirmforgotPasswordManager(params);
    const response = {
      statusCode: 200,
      message: "Success",
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
