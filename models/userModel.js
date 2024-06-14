import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumer: { type: String, required: true },
    password1: { type: String, select: true },
  },
  { timestamps: true }
);

const Users = mongoose.model("Users", userSchema);

export default Users;
