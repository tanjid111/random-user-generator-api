const cors = require("cors");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const usersRoute = require("./routes/v1/users.route")
const errorHandler = require("./middleware/errorHandler");


//middleeware
app.use(cors())
app.use(express.json())

app.use("/api/v1/user", usersRoute)

app.get("/", (req, res) => {
    res.send("Welcome to Random User Data Generator API App")
})

app.all("*", (req, res) => {
    res.send("No route found");
});

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Random User Data API APP listening on port ${port}`);
});

process.on("unhandledRejection", (error) => {
    console.log(error.name, error.message);
    app.close(() => {
        process.exit(1);
    });
});