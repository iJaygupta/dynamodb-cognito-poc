const AWS = require("aws-sdk");
AWS.config.update({ region: "ap-south-1" });

const docClient = new AWS.DynamoDB.DocumentClient();

var params = {
  RequestItems: {
    test_order_details: {
      Keys: [
        {
          order_no: 123,
          order_id: 101
        }
      ]
    },
    test_order_items: {
      Keys: [{ order_no: 222 }]
    }
  }
};

docClient.batchGet(params, function(err, data) {
  if (err) {
    console.log(err);
  }
  console.log("BatchGet succeeded:", JSON.stringify(data, null, 2));
});
