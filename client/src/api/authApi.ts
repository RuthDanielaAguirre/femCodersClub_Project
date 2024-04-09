import { User } from "../types/types"
import axios from 'axios';

const authApi = async (email: string, password: string): Promise<User> => {
    const result = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, {userEmail: email, userPassword: password});
  return result.data;
}

export default authApi;

