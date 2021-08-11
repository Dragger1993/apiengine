var express = require("express")
var rout = express.Router();
var day;

rout.get("/", function (req, res, rest) {
    //console.log(req)
    res.send("API WORKS")
})
rout.post("/", function (req, res, rest) {
    console.log(req.body.name)
    var date = String(req.body.DOB).trim()
    console.log(date)
    var check = date.replace('/', "-")
    var check = check.replace('/', "-")
    var check1 = new Date(check)
    console.log(check)
    var getday = check1.getDay()
    switch (getday) {
        case 1:

            day = "Monday"
            break;

        case 2:

            day = "Tuesday"
            break;

        case 3:

            day = "Wednesday"
            break;

        case 4:

            day = "Thursday"
            break;

        case 5:

            day = "Friday"
            break;

        case 6:

            day = "Saturday"
            break;

        case 7:

            day = "Sunday"
            break;

    }
    console.log(day)
    res.send(day)

})
module.exports = rout;