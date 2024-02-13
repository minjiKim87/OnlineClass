require("dotenv").config();
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

const dbUri = `mongodb+srv://kmj087:${process.env.DB_PASSWORD}@cluster0.jtc5gjs.mongodb.net/onlineclass`;

mongoose
  .connect(dbUri)
  .then(() => console.log("MongoDB에 성공적으로 연결되었습니다."))
  .catch((err) => console.error("MongoDB 연결에 실패했습니다:", err));

app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.use("/api", require("./src/routes/authRoutes"));
app.use("/api/courses", require("./src/routes/courseRoutes"));
app.use("/api", require("./src/routes/enrollmentRoutes"));

app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`서버가 ${PORT}번 포트에서 실행 중입니다.`);
});
