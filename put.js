const AWS = require("aws-sdk");
AWS.config.update({ region: "ap-southeast-1" });

const docClient = new AWS.DynamoDB.DocumentClient();

var table = "loan_customer_ph";

var params = {
  TableName: table,
  Item: {
    userId: "abhi",

    tenor: "second info"
  }
};

docClient.put(params, function(err, data) {
  if (err) {
    console.error(
      "Unable to read item. Error JSON:",
      JSON.stringify(err, null, 2)
    );
  } else {
    console.log("PutItem succeeded:", JSON.stringify(data, null, 2));
  }
});
