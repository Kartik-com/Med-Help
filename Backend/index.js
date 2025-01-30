const express = require("express");
const app = express(); // Initialize Express application

const database = require("./config/database"); // Import database configuration
const cookieParser = require("cookie-parser"); // Import cookie-parser middleware
const cors = require("cors"); // Import CORS middleware
const { cloudinaryConnect } = require("./config/cloudinary"); // Import cloudinary configuration
const fileUpload = require("express-fileupload"); // Import file upload middleware
const dotenv = require("dotenv"); // Import dotenv for environment variables
dotenv.config(); // Load environment variables from .env file

const PORT = process.env.PORT || 4000; // Define the server port

database.connect(); // Connect to the database

app.use(express.json()); // Middleware to parse JSON requests
app.use(cookieParser()); // Middleware to parse cookies
app.use(cors());


app.use(
  fileUpload({
    useTempFiles: true, // Use temporary files for file uploads
    tempFileDir: "/tmp", // Temporary directory for file uploads
  })
);

cloudinaryConnect(); // Connect to Cloudinary

// Define routes



// Root route for server status check
app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running....",
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});