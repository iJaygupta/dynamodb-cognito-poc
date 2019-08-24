const signUp = require("./signUpManager.js");

exports.handler = async event => {
  var params = {
    ClientId: "7abq22hh8s466bcmu2dtlq92ri",
    Password: "jayKUMAR%6",
    UserAttributes: [
      {
        Name: "name",
        Value: "spanwar12097@gmail.com"
      },
      {
        Name: "phone_number",
        Value: "+919897821299"
      }
    ],
    Username: "spanwar120297@gmail.com"
  };
  try {
    var res = await signUp.signUpManager(params);

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
