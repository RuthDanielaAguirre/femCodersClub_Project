import axios from "axios";
import { Volunteer } from "../types/types";

export const getVolunteers = async (): Promise<Volunteer[]> => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/volunteer`);
    return response.data;
};

export const addVolunteer = async (volunteerName:string, volunteerLastName:string, volunteerEmail:string, volunteerGender:string): Promise<Volunteer> => {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/volunteer`, { volunteerName:volunteerName, volunteerLastName:volunteerLastName, volunteerEmail:volunteerEmail, volunteerGender:volunteerGender});
        return response.data;
}

export const updateVolunteer = async (idVolunteer: string, updatedVolunteer:{volunteerName:string, volunteerLastName:string, volunteerEmail:string, volunteerGender:string}): Promise<Volunteer> => {
    const response = await axios.put(`${import.meta.env.VITE_API_URL}/volunteer/${idVolunteer}`, updatedVolunteer);
    return response.data;
};

export const deleteVolunteer = async  (idVolunteer: string): Promise<Volunteer> =>{
    const response= await axios.delete(`${import.meta.env.VITE_API_URL}/volunteer/${idVolunteer}`);
    return response.data;
}