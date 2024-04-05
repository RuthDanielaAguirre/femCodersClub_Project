import axios from "axios";

const url = 'https://femcodersclub-project.onrender.com/events';
// const url = 'http://localhost:3000/events';

export const getPastEvents = async (): Promise<any> => {
        const response = await axios.get(`${url}/api/list/past`);
        return response.data;
};

export const getUpcomingEvents = async (): Promise<any> => {
        const response = await axios.get(`${url}/api/list/upcoming`);
        return response.data;
};