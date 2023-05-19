import User from "./user.model";

export const createUserToDb = async () => {
  const user = await new User({
    id: "87698",
    role: "student",
    password: "iamjoy",
    name: {
      firstName: "joy",
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
  return user;
};
