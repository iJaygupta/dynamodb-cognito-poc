const login = require("./loginManager");

const AWS = require("aws-sdk");
AWS.config.update({ region: "ap-southeast-1" });

let cognitoHelper = new AWS.CognitoIdentityServiceProvider();

exports.handler = async event => {
  var params = {
    AuthFlow: "REFRESH_TOKEN_AUTH",
    ClientId: "46l57acg5t0f93dcttalmr97ha",
    UserPoolId: "ap-southeast-1_4LwLt1ZmR",
    AuthParameters: {
      REFRESH_TOKEN:
        "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.efh1G2ugesvKmSVhtwKYANwZ4Tp9mg9n1ASRb6rl0VC4cZ9uyT7_9CqvwPgm4QuEIm0WnFvBKLudRDIUmC7GszWgWB2rQO7jmt3zUARvnzKMtlxshwxXAcdbSYsWomK\r\nCdV88ZKJFcTBgcv113TdNejeqmYL61h_leNE-zME4NC9YWLpvN_IZ3Cqgg81Mz-7QIlbLxwAhXFYlf34JYk6FdDVKw76xUQGA4tsP4c-yn-Jjve98F15BtcGoapi69UKYFq-BLxULYGPttJaa4q0p3vUjsyHLTxdaqvvg-PZLpMUS3O7SZW16JOgJ-9sBaO3\r\nruHc7mWtdEbbniREH_2gE_A.hjb0iNnLnrtsg1JX.C81VI7h5OQL15ULLpc1KKEeEV81Kxz-VCRWVatnmAGM5hIrAfrKsTkE5_3b9CSz3sFTTizVjkMl-tNu6ev-GUDg7uOsgJV_Gwc9o8gwF85ZEvrZUrVRC_1VVP8fuyl64SVU8JEWY4S1T_Sck2CX_owy\r\nhcOjuS8ikKGNnyUAr9SXiflp_y7dg-nG8mfGlh5rWcqwMR_Z24lv7loW3LjpK3AXE7NX7L4GDR1TSTTkHAXX5CjpebB0tUuGRbRQ0F_q50HWjsJ80AbBKMElSjrLYtNrgIAmbttqP5XKAScGR5rXa9i-Zycp6RTfZVwTXUKNbNkILot6PyrwyG1V81ITWDje\r\nOKkuXJhIZh9Y1Xn5QhUJj9G1LenLYXd9SjLXTqr4VppXOmcuhInDeQMc4WEwxyiGFy16kZwufUQ5OGQZXxGwyaZ4qjoJHwgqQp9Kg3r5z9n6WOsbI3liUSFN8-NmDFyQkkiBPeXGgrEB3jr3hw_dLegYxz_fCUHbLnu8eLr-seWQ1Bt1Ycah7Dxfa-DA4Y9t\r\nDZ0eMrBsQG2YPwbPzpasW_p9GR-E0Z0gNPckrwqqU4lypOHwOrgA-z2CNHsid1wHpwXkBuJAY3dUYcq-3XfFuMzKMBpN3lI_G-OKgIzmKNfZYhoduN_X7fcfwJIfLHXjq0RsmJtceIhKjNjIS5zyAwMSt8Yis26-R1M-tKRr0MYs2Ye2BnG40IW8ZzQGOoQn\r\nd8wMdYeLcnddpOWBHWok6MkeXvgs_yg3SHhlVLsq1XBZ7MFjXFw4Y93EpAUrJhnQgLzJBUZWDUeZlGDQBBa5T6B7wQJJ3djKCwUOKSu4Kg15PU7_85fw7vzzgqmefCw1g7Gd33IvQKqIZTIpYq-6-BpsV0Kcnq4D0MPElmUZg8fsXI5XTSC3cJXDRPzi3BR4\r\n97Cz2YSB04WToGfePVYcC6IHdZFibYKlSxLcLrFqWpf2PLI5fTz5zSL_pIQ586wfimWHAYLykDhWPrFMGNrIB8_5BtFkNvBpQiaEtFmTNugAMeMv2NoFsQsAfFCnsRXkHVjIJXOAbsDEqZbf44JoLL59trYuRG_YPQUMfsE5b2uoXVk0fWeGsU8rpKOEZ94D\r\naUj1wPA_oIJErx_Pgw46gnSqxMZGaUkBV1yVWldfCMz4Y-T5I7_KsxVm_n6i4tHTVkISz1dK9aPdZzJc5D1VhVwFmXKlTKk4dDGevaj7x_eQJZ9tMx4M3OXqYCZ70Pb8kksmUstFHagzXqabm3ZxEDOfC5PmrM8i6FgVEcZX4D_XHvsajbEF5KA7IbIvMdxJ\r\n4helqgJLgBazBgvU63G9mCJFrtUzBx2wrrHe5aVS48bkjwO6MYRh1jg.7UyllvIbO8kHJZSGkqOGFw"
    }
  };
  try {
    // var res = await login.loginManager(params);

    let result = await cognitoHelper.adminInitiateAuth(params).promise();
    console.log(result);

    const response = {
      statusCode: 200,
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
/*
const AWS = require("aws-sdk");
AWS.config.update({
  region: "ap-southeast-1"
});
const cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();



exports.handler = async ({REFRESH_TOKEN}) => {
   
   const params = {
      AuthFlow: "REFRESH_TOKEN", 
      ClientId: '6bt2icufb8tvgkd37iljkab3es', 
      UserPoolId: 'ap-southeast-1_i4mzcsUvR', 
      AuthParameters: {
        REFRESH_TOKEN
      }
   };
    
    const data = await cognitoidentityserviceprovider.adminInitiateAuth(params).promise();
    return data;
};

*/
