import axios from "axios";


const API_URL = 'https://femcodersclub-project.onrender.com/member'
export const getMember = async (): Promise<Member[]> => {
    const response = await axios.get(API_URL);
    return response.data;
};