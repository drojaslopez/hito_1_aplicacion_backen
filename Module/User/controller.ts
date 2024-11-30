import { Request, Response } from "express";
import { User } from "./service";

const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.getUseById(id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.json(user);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getUsers = async (req: Request, res: Response) => {};

const createUser = async (req: Request, res: Response) => {};

const updateUser = async (req: Request, res: Response) => {};

const deleteUser = async (req: Request, res: Response) => {};


export const userController = {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser
};
