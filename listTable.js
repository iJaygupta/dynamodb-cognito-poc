const AWS = require("aws-sdk");
AWS.config.update({ region: "ap-south-1" });

const DynamoDB = new AWS.DynamoDB();

var params = {
  ExclusiveStartTableName: "test",
  Limit: 30
};

DynamoDB.listTables(params, function(err, data) {
  if (err) {
    console.log(err);
  }
  console.log(data);
});
