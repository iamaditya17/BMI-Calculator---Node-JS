const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));  //through urlencoded() we can get access to Form data.

app.get("/", (req, res) => {
    res.sendFile("D:/EXPRESS JS (Angella Yu)/Calculator_project/index.html");
})

app.post("/", (req, res) => {

    //here the value of num1 & num2 is parsed as a text/String not as a number. So we need to typeCast it to Number
    var n1 = Number(req.body.num1);    
    var n2 = Number(req.body.num2);   
    var result = n1 + n2;
    res.send("The Result of the calculation is: " + result);
})

app.listen(3000, () => console.log("Server is listening to port 3000"))


//Body-parser parses is an HTTP request body that usually helps when you need to know more than just the URL being hit. Specifically in the context of a POST, PATCH, or PUT HTTP request where the information you want is contained in the body. Using body-parser allows you to access req.

// npm install body-parser     ---> to install body-parser package