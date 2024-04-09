import axios from "axios";
import {  User } from "../types/types";

export const googleAuth = async (token:string|undefined): Promise<User> => {
        const result = await axios.post(`${import.meta.env.VITE_API_URL}/google-authentication`, {token});
        return result.data;
}