import axios from "axios";
import { Volunteer } from "../types/types";

const API_URL = 'https://femcodersclub-project.onrender.com/volunteer'
export const getVolunteers = async (): Promise<Volunteer[]> => {
    const response = await axios.get(API_URL);
    return response.data;
};


export const addVolunteer = async (volunteerName:string, volunteerLastName:string, volunteerEmail:string, volunteerGender:string): Promise<Volunteer> => {
        const result = await axios.post(API_URL, { volunteerName:volunteerName, volunteerLastName:volunteerLastName, volunteersEmail:volunteerEmail, volunteersGender:volunteerGender});
        return result.data;
}

