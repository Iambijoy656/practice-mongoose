import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDb = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload); // User -> Class ; user -> instance
  await user.save(); // build in instance methods ; we create custom instace methods

  return user;
};

export const getUsersFromDb = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

export const getuserFromDb = async (
  id: string | null
): Promise<IUser | null> => {
  const user = await User.findOne({ id: id }, { name: 1, contactNo: 1 });
  return user;
};
