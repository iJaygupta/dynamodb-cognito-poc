const localSignOut = require("./localSignOutManager");

exports.handler = async event => {
  var params = {
    AccessToken:
      "eyJraWQiOiJkZVBraGxiUzRQM1prTVM0VFF4dkRPVXdENWhOODVzVFwvdHh0dk9pRHI0QT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJiNGQwYWYxNi02MTU0LTQ0ODEtOTQwYy1kNGIxN2M3MDE5NDEiLCJldmVudF9pZCI6IjA4ZTUyOTBmLTdkMzctMTFlOS04M2ZmLTNmMDkwZWQ5NDFiZCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1NTg2MDEwOTMsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aGVhc3QtMV80THdMdDFabVIiLCJleHAiOjE1NTg2MDQ2OTMsImlhdCI6MTU1ODYwMTA5NCwianRpIjoiNzFiMzJiNWUtYWI2MC00M2ZjLWJhOGEtN2Q2Njc0NDhlMGIwIiwiY2xpZW50X2lkIjoiN292MmdwcGo3cWltOXBvdWI4azVwc2NhaG4iLCJ1c2VybmFtZSI6ImI0ZDBhZjE2LTYxNTQtNDQ4MS05NDBjLWQ0YjE3YzcwMTk0MSJ9.D1vZxs_wARGV4p9YqYHBy5Zo6ge-w9O0cyHlT2VRRJls4QbxyqS2N8novKPpdKkOHAoVkXQ8qSXFAg-IFsKFq_Cxh9uCuSGp4EGYZc8PQQ87nnitP1FSb2yVwXdHRCU4DK1Orx0X0E0HPEM9CEBOPZzyveHe7VrlFLAdLZNA9Uf9UU5UHc5Ak_yzCQC-uyxdohv7tEMxmhYwbuutgzhCYtlMc-ibyA8nj_detT04tj7pZE1baR4_1QR90L1m6LMn93c2g5kFN1bGaXEWct5wH4PVnflEJw0PC7Gn9HjV5H1M9fLYfy1ewNFJ1i49aP7K559cOpJ5qhvIRi8szvnNow",
    DeviceKey: "string"
  };
  try {
    var res = await localSignOut.logOutManager(params);

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
