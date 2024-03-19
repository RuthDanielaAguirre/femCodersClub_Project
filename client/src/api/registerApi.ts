import axios from 'axios';
import { User } from '../types/types';

const url = 'https://backend-marketplace-1l2b.onrender.com/auth/register';

export const register = async (name: string, lastname: string, email: string, password: string): Promise<User> => {
        const result = await axios.post(url, { user_name:name, user_lastname:lastname, user_email:email, user_password:password });
        return result.data;
}