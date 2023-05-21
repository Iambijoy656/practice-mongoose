
import { NextFunction } from "express";
import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDb = async (payload: IUser): Promise<IUser> => {
  // creating a new user
  const user = new User(payload); // User -> Class ; user -> instance
  await user.save(); // build in instance methods ;

  console.log(user.fullName()); //we create custom instace methods
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

export const getAdminsUserFromDb = async () => {
  const admins = await User.getAdminUsers();
  return admins;
};



// class er sathe Attached howya method -> Directly call using class
