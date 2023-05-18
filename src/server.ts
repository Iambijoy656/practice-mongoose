import mongoose from "mongoose";
import app from "./app";

const port:number = 4000;

//Database connection

async function bootstrap() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice-mongoose");
    console.log("Database connection successfully");
    app.listen(port, () => {
      console.log(`server is listening on port ${port}`);
    });
  } catch (error) {
    console.log("failed to connect", error);
  }
}
bootstrap();


