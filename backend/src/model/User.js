/**
 * Defini o schema do user
 */

const mongoose = require("../database");
const { hash } = require("bcrypt");

const Schema = mongoose.Schema;

const UserSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre("save", async function (next) {
  const hashx = await hash(this.password, 10);
  this.password = hashx;

  next();
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
