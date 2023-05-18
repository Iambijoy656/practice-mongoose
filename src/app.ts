import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";

const app: Application = express();
//using cors
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  //inserting attached data into mongodb
  /*
step 1: Interace done
step 2: schema done
step 3: Model
step 4: Database Query on model

*/
  // res.send("Hello World!");
  // next();

  //Creating an interface
  interface IUser {
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

  // 2. Create a Schema corresponding to the document interface.
  const userSchema = new Schema<IUser>({
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

  // Create a Model.
  const User = model<IUser>("User", userSchema);

  const createUserToDb = async () => {
    const user = new User({
      id: "777",
      role: "student",
      password: "iambijoy",
      name: {
        firstName: "Nishan",
        midleName: "chandro",
        lastName: "das",
      },
      dateOfBirth: "07/08/1999",
      gender: "male",
      email: "bijoydas00656@gmai.com",
      contactNo: "01865800656",
      presentAddress: "Dhaka",
      permanentAddress: "Comilla",
    });
    await user.save();
    console.log(user);
  };
  createUserToDb();
});

export default app;
