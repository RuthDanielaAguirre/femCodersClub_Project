import axios from 'axios';
import { User } from '../types/types';

const url = 'https://femcodersclub-project.onrender.com/auth/signup';
export const registerUser = async (name: string, lastname: string, gender: string, phoneNumber: string, email: string, password: string): Promise<User> => {
        const result = await axios.post(url, { userName:name, userLastName:lastname, userGender: gender, userTelephone:phoneNumber, userEmail:email, userPassword:password });
        return result.data;
}