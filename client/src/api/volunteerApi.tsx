import axios from "axios";
import { Volunteer } from "../types/types";

const API_URL = 'https://femcodersclub-project.onrender.com/volunteer'
export const getVolunteers = async (): Promise<Volunteer[]> => {
    const response = await axios.get(API_URL);
    return response.data;
};


export const addVolunteer = async (volunteerName:string, volunteerLastName:string, volunteerEmail:string, volunteerGender:string): Promise<Volunteer> => {
        const response = await axios.post(API_URL, { volunteerName:volunteerName, volunteerLastName:volunteerLastName, volunteerEmail:volunteerEmail, volunteerGender:volunteerGender});
        return response.data;
}

export const updateVolunteer = async (idVolunteer: string, updatedVolunteer:{volunteerName:string, volunteerLastName:string, volunteerEmail:string, volunteerGender:string}): Promise<Volunteer> => {
    const response = await axios.put(`${API_URL}/${idVolunteer}`, updatedVolunteer);
    return response.data;
};

export const deleteVolunteer = async  (idVolunteer: string): Promise<Volunteer> =>{
    const response= await axios.delete(`${API_URL}/${idVolunteer}`);
    return response.data;
}