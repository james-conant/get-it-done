const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

// connect database
connectDB();

// init middleware
app.use(express.json({ extended: false }));
app.use(bodyParser.json()); // <--- Here
app.use(bodyParser.urlencoded({ extended: true }));

// App Instance
app.use("/api/todos", require("./routes/todoListRoutes"));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`shits up on port ${PORT}!`));
