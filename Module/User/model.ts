import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { User } from "./interfaces";

/* 
const __dirname = import.meta.dirname;

console.log(import.meta.dirname);

console.log(__dirname) 

path1 = path.resolve("users/admin", "readme.md");
const pathFile = path.resolve(__dirname, "../../data/users.json");
*/

const pathFile= path.resolve("Module/User/users.json")

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
