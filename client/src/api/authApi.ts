import { User } from "../types/types"
import axios from 'axios';
 const url= 'https://femcodersclub-project.onrender.com/auth/login';
 //const url= 'https://backend-marketplace-1l2b.onrender.com/auth/login';
const authApi = async (email: string, password: string): Promise<User> => {
    const result = await axios.post(url, {userEmail: email, userPassword: password});
  return result.data;
}

export default authApi
