const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
/* Allow frontend to connect (Cross origin ) */
app.use(cors());

/* Parse JSON in requests */
app.use(express.json());

/* test route */
app.get("/", (req, res) => {
  res.send("Backend API is running!");
});

/* exporting the application from this file - (i.e. making it avaliable for the server.js module) */
module.exports = app;
