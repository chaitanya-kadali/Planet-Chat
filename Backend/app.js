const express = require("express");
// const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

const mongoose = require("mongoose");
require("dotenv").config();

const mongoURI = process.env.MONGO_URI;  // mongo db cloud url is hidden to env file
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Successfully connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error);
  });

// MongoDB Connection
// mongoose.connect('mongodb://localhost:27017/meditationdb', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

//user model
const newUser = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  age: Number,
});

const User = mongoose.model("User", newUser);

//Favourite session model
const newFavSess = mongoose.Schema({
  title: String,
  min: Number,
  sec: Number,
  email: String,
});

// Route to serve the welcome page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// registration
app.post("/user_inf", async (req, res) => {
  const { name, email, password, age } = req.body;

  try {
    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create new user instance with hashed password
    const newUser = new User({ name, email, password: hashedPassword, age });

    // Save the user to the database
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json({ error: error.message });
  }
});



app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if user exists in the database
    const user = await User.findOne({ email });
    // console.log(user);
    // res.json(user);
    // ok
    if (!user) {
      // User not found, send error response

      return res
        .status(404)
        .json({ success: false, error: "Invalid email or password." });
    }
    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      // Passwords don't match, send error response
      return res
        .status(403)
        .json({ success: false, error: "Invalid email or password." });
    }
    res.json({ success: true, message: "Login successful", user: user });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

// Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
