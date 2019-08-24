const AWS = require("aws-sdk");
AWS.config.update({ region: "ap-southeast-1" });

const DynamoDB = new AWS.DynamoDB();

exports.prepareTransactionWrite = function() {
  return {
    TransactItems: [
      {
        Put: {
          TableName: "test_request_report",
          Item: {
            request_id: { N: "2222" },
            request_type: { S: "testing" }
          }
        }
      },
      {
        Put: {
          TableName: "test_order_details",
          Item: {
            order_id: { N: `108` },
            order_no: { N: `108` },
            available: { BOOL: true }
          }
        }
      },
      {
        Delete: {
          TableName: "test_request_report",
          Key: { request_id: { N: "2222" } },
          ConditionExpression: "#ne < :val",
          ExpressionAttributeNames: {
            "#ne": "product"
          },
          ExpressionAttributeValues: {
            ":val": { N: "223" }
          }
        }
      }
    ]
  };
};

exports.executeTransactionWrite = function() {
  let params = exports.prepareTransactionWrite();
  console.log(params);

  DynamoDB.transactWriteItems(params, function(err, res) {
    if (err) {
      console.log(
        "Error in transactWriteItems " + JSON.stringify(err, null, 2)
      );
    } else {
      console.log(
        "transactWriteItems Query succeeded :" + JSON.stringify(err, null, 2)
      );
    }
  });
};
