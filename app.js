const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

// Set views directory
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/js", express.static(__dirname + "/public/js"));

// Send index.html for root URL
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

// Send profile.html for /profile URL
app.get("/profile", (req, res) => {
    res.sendFile(__dirname + "/views/profile.html");
});

// Start server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
