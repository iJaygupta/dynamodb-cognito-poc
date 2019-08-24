const AWS = require("aws-sdk");
AWS.config.update({ region: "ap-southeast-1" });


const docClient = new AWS.DynamoDB.DocumentClient();


var params = {
    TableName: 'users_ph',
    KeyConditionExpression: 'id = :username and phoneNumber=:phoneNumberValue ',
    FilterExpression: '#filterType = :typeValue',
    ExpressionAttributeNames: {
        '#filterType': 'phoneVerified'
    },
    ExpressionAttributeValues: {
        ':username': "dikshit.kathuria@creditculture.sg",
        ':phoneNumberValue': +918808974265,
        ':typeValue': true

    }
}


docClient.query(params, function (err, data) {
    if (err) {
        console.error(
            "Unable to read item. Error JSON:",
            JSON.stringify(err, null, 2)
        );
    } else {
        console.log("Query Succeeded:", JSON.stringify(data, null, 2));
    }
});
