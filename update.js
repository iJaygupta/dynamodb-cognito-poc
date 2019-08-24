const AWS = require("aws-sdk");
AWS.config.update({ region: "ap-south-1" });

const docClient = new AWS.DynamoDB.DocumentClient();
var table = "test_order_details";

// var params = {
//   TableName: table,
//   Key: {
//     order_id: 101,
//     order_no: 111
//   },
//   UpdateExpression: "set info=:titleValue",
//   ExpressionAttributeValues: {
//     ":titleValue": "First Info"
//   },
//   ReturnValues: "UPDATED_NEW"
// };

// var params = {
//   TableName: table,
//   Key: {
//     order_id: 104,
//     order_no: 444
//   },
//   UpdateExpression: "set info=:infoValue",
//   ExpressionAttributeValues: {
//     ":infoValue": "fieldValue"
//   },
//   ReturnValues: "ALL_OLD",
//   ReturnConsumedCapacity: "TOTAL",
//   ReturnValues: "UPDATED_NEW"
// };

// var params = {
//   TableName: table,
//   Key: {
//     order_id: 103,
//     order_no: 333
//   },
//   UpdateExpression: "remove info"
// };

// var params = {
//   TableName: table,
//   Key: {
//     order_id: 101,
//     order_no: 111
//   },
//   UpdateExpression: "set #a = :x + :y",
//   ConditionExpression: "#a < :MAX",
//   ExpressionAttributeNames: { "#a": "calc" },
//   ExpressionAttributeValues: {
//     ":x": 60,
//     ":y": 35,
//     ":MAX": 100
//   }
// };

var params = {
  TableName: table,
  Key: {
    order_id: 103,
    order_no: 333
  },
  UpdateExpression: "set title =:infoValue",
  ExpressionAttributeValues: {
    ":infoValue": ["my", "title"]
  }
};

docClient.update(params, function(err, data) {
  if (err) {
    console.error(
      "Unable to update item. Error JSON:",
      JSON.stringify(err, null, 2)
    );
  } else {
    console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
  }
});
