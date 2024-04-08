import axios from "axios";
import {  User } from "../types/types";

const url = 'http://localhost:3000/google-authentication';
export const googleAuth = async (token:string|undefined): Promise<User> => {
        console.log(token)
        const result = await axios.post(url, {token});
        // console.log(result.data);
        return result.data;
}