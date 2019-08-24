const AWS = require("aws-sdk");
AWS.config.update({ region: "ap-south-1" });

const docClient = new AWS.DynamoDB.DocumentClient();

var params = {
  RequestItems: {
    test_order_details: [
      {
        DeleteRequest: {
          Key: { order_id: 102, order_no: 142 }
        }
      },
      {
        PutRequest: {
          Item: {
            order_id: 101,
            order_no: 123,
            info: "No First info"
          }
        }
      },
      {
        PutRequest: {
          Item: {
            order_id: 102,
            order_no: 222,
            info: "No Second info"
          }
        }
      },
      {
        PutRequest: {
          Item: {
            order_id: 103,
            order_no: 333,
            info: "No third info"
          }
        }
      },
      {
        PutRequest: {
          Item: {
            order_id: 104,
            order_no: 444,
            info: "No Fourth info"
          }
        }
      }
    ],
    test_order_items: [
      {
        PutRequest: {
          Item: {
            order_no: 222,
            jsonSchema: "No jsonSchema",
            product: "No product title"
          }
        }
      }
    ]
  }
};

docClient.batchWrite(params, function(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
