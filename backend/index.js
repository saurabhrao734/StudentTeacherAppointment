const express = require("express");
const path = require("path");
const app = express();

// cors
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

// middleware
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect to MongoDB
const connectToMongo = require("./db");
connectToMongo();

// app.get("/", (req, res) => {
//   res.send("Welcome to the Tutor-Time API!");
// });

// mouting routes
const adminRoutes = require("./routes/adminRoutes");
const teacherRoutes = require("./routes/teacherRoutes");
const studentRoutes = require("./routes/studentRoutes");
const messageRoutes = require("./routes/messageRoutes");

app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/teachers", teacherRoutes);
app.use("/api/v1/student", studentRoutes);
app.use("/api/v1/messages", messageRoutes);

// global catch
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something broke!");
// });

//-------------deployment-------
const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  // Serve static files from frontend/dist
  app.use(express.static(path.join(__dirname1, "../frontend/dist")));

  // Serve index.html for all remaining routes (React/Vite routing)
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname1, "../frontend", "dist", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running successfully");
  });
}

//-------------------------

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("App listening on port " + port);
});
