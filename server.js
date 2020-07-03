var express = require("express");
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => res.send("Hello World"));
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`shits up on port ${PORT}`));
