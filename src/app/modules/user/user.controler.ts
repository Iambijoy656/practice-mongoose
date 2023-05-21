import { NextFunction, Request, Response } from "express";
import { createUserToDb, getAdminsUserFromDb, getUsersFromDb, getuserFromDb } from "./user.service";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  const user = await createUserToDb(data);
  res.status(200).json({ status: "success", data: user });
};

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await getUsersFromDb();
  res.status(200).json({ status: "success", data: user });
};

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  const user = await getuserFromDb(id);
  res.status(200).json({ status: "success", data: user });
};

export const getAdminUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await getAdminsUserFromDb();
  res.status(200).json({ status: "success", data: user });
};



//pattern

// Route -> Controller -> service
