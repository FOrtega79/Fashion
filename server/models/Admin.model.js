const { Schema, model } = require("mongoose");



const AdminSchema = new Schema(
  {
    username: {
      type: String,
      unique: true, 
      required: true, 
    },
    email:{
      type: String, 
      required: true, 
      unique:true,
    },
    password: {
    type: String,
    required: true,
    } 
  },
  {
    timestamps: true,
  }
);

const Admin = model("Admin", userSchema)

module.exports = Admin
