//import { nanoid } from 'nanoid';

import { User } from './interfaces';



const getUseById = async (id: string) => {
    const users = await User.readUsers();
    const user = users.find((user) => user.id === id);
    return user;
};


export const User = { 
    getUseById
}


  