import { Request, Response } from 'express';
import { User } from './service';
const getUser = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const user = await User.getUseById(id);
      if (!user) {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.json(user);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

export const userController = {
    
    getUser,
  };
  