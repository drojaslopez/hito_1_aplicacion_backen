import bcrypt from "bcryptjs";
import { nanoid } from 'nanoid';
import { UserModel } from './model';
import { User } from "./interfaces";


const createUser = async (
    email: string,
    password: string
  ) => {/* 
    const users = await getUsers();
    const user = users.find((item) => item.email === email);
    if (user) {
      throw new Error("Email already exists");
    }
  
    const salt = await bcrypt.genSalt(10);
    const passwordHashed = await bcrypt.hash(password, salt);
  
    const newUser: User = {
      id: nanoid(),
      email,
      password: passwordHashed,
      fullName: "",
      profile: "",
    };
  
    users.push(newUser);
    await UserModel.writeUsers(users);
    return newUser; */
  };


const getUseById = async (id: string) => {
    const users = await UserModel.readUsers();
    const user = users.find((user) => user.id === id);
    return user;
};


const getUsers = async () => {
    const users = await UserModel.readUsers();
    return users;    
};

const updateUser = async () => {

    const users = await UserModel.readUsers();
    return users;
    
};

const deleteUser = async () => {

    const users = await UserModel.readUsers();
    return users;
    
};




export const userService = { 
    createUser,
    getUseById,
    getUsers,
    updateUser,
    deleteUser
}

  