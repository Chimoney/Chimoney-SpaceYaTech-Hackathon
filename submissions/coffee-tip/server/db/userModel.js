const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide an Name!"],
    unique: false,
  },
  email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, "Email Exist"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password!"],
    unique: false,
  },
  uniqueId: {
    type: String,
    required: [true, "Please provide an subaccount id!"],
    unique: [true, "Account already Exist"],
  },
});

// create coffee Users table or collection if there is no table with that name already
module.exports = mongoose.model.users || mongoose.model("users", UserSchema);
