import { HydratedDocument, Model } from "mongoose";

export interface IUser {
  id: string;
  role: "student";
  password: string;
    name: {
      firstName: string;
      midleName?: string;
      lastName: string;
    };
    dateOfBirth?: string;
    gender: "male" | "female";
    email: string;
    contactNo: string;
    presentAddress: string;
    permanentAddress: string;
  }

//Static 
 export interface UserModel extends Model<IUser, {}, IUserMethods> {
  getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}


  //Instance methods
export interface IUserMethods {
  fullName(): string;
}




  // {
  //   id: "9009988",
  //   role: "student",
  //   password:"nijojo",
  //   name: {
  //     firstName:"monu",
  //     midleName:"sonu",
  //     lastName: "donu",
  //   },
  //   dateOfBirth: "09/09/2020",
  //   gender: "male",
  //   email: "bij@gmail.com",
  //   contactNo: "0388383",
  //   presentAddress: "dhaka",
  //   permanentAddress: "feni"
  // }


  // id: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
  // role: {
  //   type: String,
  //   required: true,
  // },
  // password: {
  //   type: String,
  //   required: true,
  // },
  // name: {
  //   firstName: {
  //     type: String,
  //     required: true,
  //   },
  //   midleName: {
  //     type: String,
  //   },
  //   lastName: {
  //     type: String,
  //     required: true,
  //   },
  // },
  // dateOfBirth: {
  //   type: String,
  // },
  // gender: {
  //   type: String,
  //   enum: ["male", "female"],
  // },
  // email: {
  //   type: String,
  //   required: true,
  // },
  // contactNo: {
  //   type: String,
  //   required: true,
  // },
  // presentAddress: {
  //   type: String,
  //   required: true,
  // },
  // permanentAddress: {
  //   type: String,
  //   required: true,
  // },