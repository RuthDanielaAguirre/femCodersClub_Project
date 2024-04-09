import axios from 'axios';
import { User } from '../types/types';

export const registerUser = async (name: string, lastname: string, gender: string, phoneNumber: string, email: string, password: string): Promise<User> => {
        const result = await axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`, { userName:name, userLastName:lastname, userGender: gender, userTelephone:phoneNumber, userEmail:email, userPassword:password });
        return result.data;
}
