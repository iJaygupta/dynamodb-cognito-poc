const AWS = require("aws-sdk");
AWS.config.update({ region: "ap-south-1" });

const DynamoDB = new AWS.DynamoDB();
exports.executeTransaction = function() {
  let params = exports.prepareTransactionGetItemsParams(101, 123, 1111);
  DynamoDB.transactGetItems(params, function(err, res) {
    if (err) {
      console.log(
        `transactGetItems failed. Error JSON:` + JSON.stringify(err, null, 2)
      );
    } else {
      console.log(
        `transactGetItems Query succeeded :` + JSON.stringify(res, null, 2)
      );
    }
  });
};

exports.prepareTransactionGetItemsParams = function(
  order_id,
  order_no,
  request_id
) {
  return {
    TransactItems: [
      {
        Get: {
          Key: {
            order_id: { N: `${order_id}` },
            order_no: { N: `${order_no}` }
          },
          TableName: "test_order_details" /* required */,
          ProjectionExpression: "order_id,order_no,info"
        }
      },
      {
        Get: {
          Key: {
            request_id: { N: `${request_id}` }
          },
          TableName: "test_request_report" /* required */,
          ProjectionExpression: "request_id,request_type"
        }
      },
      {
        Get: {
          Key: {
            order_no: { N: `${order_no}` }
          },
          TableName: "test_order_items" /* required */,
          ProjectionExpression: "order_no,product,jsonSchema"
        }
      }
    ],
    ReturnConsumedCapacity: "TOTAL"
  };
};

exports.executeTransaction();
