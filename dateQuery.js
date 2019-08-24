const AWS = require("aws-sdk");
AWS.config.update({ region: "ap-southeast-1" });
let moment = require('moment');

const docClient = new AWS.DynamoDB.DocumentClient();
const PHONE_CODE_VLIDITY = {
    timeLimit: 20,
    timeType: 'minutes'
}
var dateTime = new Date();

var params = {
    TableName: 'ph_users_otp',
    KeyConditionExpression: 'id = :username AND #phoneVerifyCodeSentDateTime BETWEEN :fromDateTime AND :toDateTime ',
    FilterExpression: '#filterType = :typeValue',
    ExpressionAttributeNames: {
        '#phoneVerifyCodeSentDateTime': 'dateTime',
        '#filterType': 'type'
    },
    ExpressionAttributeValues: {
        ':fromDateTime': moment(dateTime).subtract(PHONE_CODE_VLIDITY.timeLimit, PHONE_CODE_VLIDITY.timeType).format("YYYY-MM-DDTHH:mm:ss.SSS"),
        ':toDateTime': moment(dateTime).format("YYYY-MM-DDTHH:mm:ss.SSS"),
        ':username': "dikshit.kathuria@creditculture.sg",
        ':typeValue': "phone"

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