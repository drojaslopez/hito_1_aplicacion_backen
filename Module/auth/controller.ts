import { Request, Response } from "express";
import { authService } from "./service";
import { userService } from "../user/service";

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const token = await authService.loginWithEmailAndPassword(email, password);
    res.json({ token });
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else res.status(500).json({ error: "Error de servidor" });
  }
};

const register = async (req: Request, res: Response) => {
  try {
    const { email, password, fullname, profile } = req.body;
    const newUser = await userService.createUser(
      email,
      password,
      fullname,
      profile
    );
    res.json({ newUser });
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else res.status(500).json({ error: "Error de servidor" });
  }
};
 
const validateToken = async (req: Request, res: Response) => {
  try {
    const users = await userService.getUsers();
    if (!users) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.json(users);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};


export const authController = {
  login,
  register,
  validateToken
};
