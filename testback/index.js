const express = require("express");

const app = express();

const port = 8000;

app.get("/", (req, res) =>{
    return res.send("Home Page");
});

const admin = (req, res) => {
    return res.send("This is Admin DashBoard");
};

const isAdmin = (req, res) => {
    return res.send("isAdmin is running");
    
};

const myLogger = function (req, res) {
    return res.send("LOGGED");
    
};
app.get("/admin", myLogger, isAdmin, admin);


app.get("/login", (req, res) => {
    return res.send("you are visiting login route");
});

app.get("/signup", (req, res) => {
    return res.send(" you are visiting sign up route");
});

app.listen(port, () => {
    console.log("server is up and running...");
});






// const port = 8000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })