import { User } from "../types/types"
import axios from 'axios';
 const url= '';
const authApi = async (email: string, password: string): Promise<User> => {
    const result = await axios.post(url, {user_email: email, user_password: password});
  return result.data;
}

export default authApi
