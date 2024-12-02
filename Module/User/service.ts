import bcrypt from "bcryptjs";
import { nanoid } from 'nanoid';
import { UserModel } from './model';
import { User } from "./interfaces";


const createUser = async (
    email: string,
    password: string,
    fullName: string,
    profile: string
  ) => { 
    const users = await getUsers();
    const user = users.find((item) => item.email === email);
    if (user) {
      throw new Error("Email already exists");
    }
  
    const salt = await bcrypt.genSalt(10);
    const passwordHashed = await bcrypt.hash(password, salt);  
    const newUser: User = {
      id: nanoid(),
      email: email,
      password: passwordHashed,
      fullName: fullName,
      profile: profile,
    };
  
    users.push(newUser);
    await UserModel.writeUsers(users);
    return newUser; 
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

const updateUser = async (
  id:string,
  email: string,
  password: string,
  fullName: string,
  profile: string
) => { 
  const users = await getUsers();
  const user = users.find((item) => item.id === id);
  if (!user) {
    throw new Error("Email does not exists");
  } 

  const salt = await bcrypt.genSalt(10);
  const passwordHashed = await bcrypt.hash(password, salt);  


  const newUser: User = {
    id: id,
    email: email,
    password: passwordHashed,
    fullName: fullName,
    profile: profile,
  };

  const newUsers = users.filter(user => user.id !== id);
  newUsers.push(newUser);
  await UserModel.writeUsers(newUsers);
  return newUser; 
};
    

const deleteUser = async (id: string) => {
    const users = await UserModel.readUsers();    
    const user = users.find((user) => user.id === id);
    if (!user) {
      throw new Error("user does not exist");
    }    
    const newUsers = users.filter(user => user.id !== id);
    await UserModel.writeUsers(newUsers);
    return user;
    
};


export const userService = { 
    createUser,
    getUseById,
    getUsers,
    updateUser,
    deleteUser
}
