const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: String,
  studentId: String,
  role: { type: String, enum: ["student", "teacher"] },
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    console.log(`Original password: ${this.password}`); // 원본 비밀번호 로깅
    this.password = await bcrypt.hash(this.password, 10);
    console.log(`Hashed password: ${this.password}`); // 해싱된 비밀번호 로깅
  }
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
