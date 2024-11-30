import { nanoid } from 'nanoid';
import { UserModel } from './model';


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



export const User = { 
    getUseById,
    getUsers,
    updateUser,
    deleteUser
}


  