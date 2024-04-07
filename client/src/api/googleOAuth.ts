import axios from "axios";
import {  User } from "../types/types";

const url = 'https://femcodersclub-project.onrender.com/google-authentication';
export const googleAuth = async (tokenData:unknown): Promise<User> => {
        const result = await axios.post(url, {tokenData});
        console.log(result.data);
        return result.data;
}