import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';


import { User } from "./interfaces";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//const __dirname = import.meta.dirname;
//path1 = path.resolve("users/admin", "readme.md");
const pathFile = path.resolve(__dirname, "../../data/users.json");


const readUsers = async () => {
   const usersJSON = await readFile(pathFile, "utf-8");
  const users = JSON.parse(usersJSON) as User[];
  return users; 
};

const writeUsers = async (users: User[]) => {
  const usersJSON = JSON.stringify(users, null, 2);
  return await writeFile(pathFile, usersJSON);
};

export const UserModel = {
  readUsers,
  writeUsers,
};
