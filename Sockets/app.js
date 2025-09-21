const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

require("dotenv").config();



// Route to serve the welcome page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
