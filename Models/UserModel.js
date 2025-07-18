import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    unique: true,
    default: "",
  },

  email: {
    type: String,
    unique: true,
  },

  password: {
    type: String,
  },

  city: {
    type: String,
  },

  number: {
    type: String,
    unique: true,
  },
});

const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);

export default UserModel;
