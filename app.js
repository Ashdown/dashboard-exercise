const express = require("express");
const app = express();
let static_directory = "//localhost:4000/static/";
const path = require("path");

if(process.env.NODE_ENV === "production") {
    static_directory = "/";
} else {
    require("./dev-server");
}

app.set("port", (process.env.PORT || 3000));

app.use("/", express.static(path.join(__dirname, "public")));

app.use("/static", express.static(path.join(__dirname, "static")));

app.get("/", function(req, res) {
    res.render("index.ejs", {static_directory: static_directory});
});

app.listen(app.get("port"), function () {
    console.log("Node app is running on port", app.get("port"));
});

module.exports = app;

