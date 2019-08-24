const AWS = require("aws-sdk");
AWS.config.update({ region: "ap-south-1" });

const docClient = new AWS.DynamoDB.DocumentClient();

var params = {
  TableName: "test_order_details",
  Key: {
    order_id: 106,
    order_no: 666
  }
};

docClient.delete(params, function(err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log("Deleted Successfully" + JSON.stringify(result, null, 2));
  }
});
