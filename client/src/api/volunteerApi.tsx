import axios from "axios";
import { Volunteer } from "../types/types";

const API_URL = 'https://femcodersclub-project.onrender.com/volunteer'
export const getVolunteers = async (): Promise<Volunteer[]> => {
    const response = await axios.get(API_URL);
    return response.data;
};


export const addVolunteer = async (volunteersName:string, volunteersLastName:string, volunteersEmail:string, volunteersGender:string): Promise<Volunteer> => {
        const result = await axios.post(API_URL, { volunteersName:volunteersName, volunteersLastName:volunteersLastName, volunteersEmail:volunteersEmail, volunteersGender:volunteersGender});
        return result.data;
}

