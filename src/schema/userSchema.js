const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    minlength: [5, "First name must be atleast 5 characters long"],
    lowercase: true,
    trim: true,   //If the user gives extra spaces it will automatically trim it
    maxlength: [20, "First name should be below 20 characters"]
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
    minlength: [5, "Last name must be atleast 5 characters long"],
    lowercase: true,
    trim: true,   //If the user gives extra spaces it will automatically trim it
    maxlength: [20, "Last name should be below 20 characters"]
  },
  mobileNumber:{
    type: String,
    trim: true,
    maxlength: [10, "Phone number should be of maximum 10 characters"],
    minlength: [10, "Phone number should be of minimum 10 characters"],
    unique: [true , "Phone number is alkready is in used"],
    required: [true, "Mobile number is required"]
  },
  email: {
    type: String,
    trim: true,
    required: [true, "Email is required"],
    unique: [true, "Email is in use"],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Password should be minimum 6 characters long"]
  }
},{
  timestamps: true
})

const User = mongoose.model("User", userSchema);  //This will create a collection and after that we can operate on this model
module.exports = User