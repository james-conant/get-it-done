const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => res.send("Hello World"));

// Define Routes
app.use("/api/users", require("./routes/api/users"));



const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`shits up on port ${PORT}`));
