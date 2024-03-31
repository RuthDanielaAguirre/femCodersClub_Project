import axios from "axios";
import { User } from "../types/types";

const url = 'https://femcodersclub-project.onrender.com/user';
export const getUser = async (id: number): Promise<User> => {
    const response = await axios.get(`${url}/${id}`);
    return response.data;
};