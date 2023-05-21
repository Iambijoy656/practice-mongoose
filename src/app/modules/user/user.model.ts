import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

// type UserModel = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    firstName: {
      type: String,
      required: true,
    },
    midleName: {
      type: String,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  dateOfBirth: {
    type: String,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  email: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  presentAddress: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
});

//static
userSchema.static("getAdminUsers",async function getAdminUsers() {
  const admins = await this.find({ role: "admin" });
  return admins
});

///instance
userSchema.method("fullName", function fullName() {
  return this.name.firstName + " " + this.name.lastName;
});

// Create a Model.
const User = model<IUser, UserModel>("User", userSchema);

export default User;

// Instance methods -> Instance er methods
// class -> Instance + methods
