let moment = require('moment');

const PHONE_CODE_VLIDITY = {
    timeLimit: 1,
    timeType: 'hours'
}

var dateTime = new Date();
dateTime = moment(dateTime).format("YYYY-MM-DDTHH:mm:ss.SSS");
console.log(dateTime)
console.log(moment(dateTime).subtract(PHONE_CODE_VLIDITY.timeLimit, PHONE_CODE_VLIDITY.timeType).format("YYYY-MM-DDTHH:mm:ss.SSS"))


