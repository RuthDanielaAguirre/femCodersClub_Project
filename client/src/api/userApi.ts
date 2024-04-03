import axios from "axios";
import { User } from "../types/types";

const url = 'https://femcodersclub-project.onrender.com/user';
export const updateUser = async (idUser: string, updatedUser:{userName:string, userLastName:string, userEmail:string, userGender:string, userTelephone:string}): Promise<User> => {
    const response = await axios.put(`${url}/${idUser}`, updatedUser);
    return response.data;
};
