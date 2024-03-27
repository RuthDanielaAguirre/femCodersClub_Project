import axios from "axios";
import { Volunteer } from "../types/types";

const API_URL = 'https://femcodersclub-project.onrender.com/volunteer'
export const getVolunteers = async (): Promise<Volunteer[]> => {
    const response = await axios.get(API_URL);
    return response.data;
};