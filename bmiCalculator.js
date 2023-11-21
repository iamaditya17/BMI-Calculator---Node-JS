const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile("D:/EXPRESS JS (Angella Yu)/Calculator_project/bmiCalculator.html");
})

app.post("/", (req, res) => {

    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight / (height * height);

    res.send("Your BMI is: " + bmi);
})
app.listen(3000 , () => console.log(`Server is listening to port 3000`))