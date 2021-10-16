const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const blogRoutes = require("./routes/blog");

app.use(cors());
app.use(express.json());
app.use("/blog", blogRoutes);
dotenv.config();

connectDB().catch((err) => console.log(err));

async function connectDB() {
  await mongoose.connect(process.env.DB_STRING);
}
app.get("/", (req, res) => {
  res.send("Working!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
