const globalSignOut = require("./globalSignOutManager");

exports.handler = async event => {
  var params = {
    UserPoolId: "ap-southeast-1_kIr3XQM7S",
    Username: "jay.gupta@creditculture.sg"
  };
  try {
    var res = await globalSignOut.logOutManager(params);

    const response = {
      statusCode: 200,
      message: "You Sign Out Successfully",
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
