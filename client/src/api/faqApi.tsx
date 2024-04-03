import axios from "axios";
import { Faq } from "../types/types";
import {UpdateFaqDto} from "../../../server/src/faq/dto/update-faq.dto";

const url = 'https://femcodersclub-project.onrender.com/faq';
export const addFaq = async (faqQuestion:string, faqAnswer:string): Promise<Faq> => {
        const result = await axios.post(url, { faqQuestion:faqQuestion, faqAnswer:faqAnswer, });
        return result.data;
}
export const updateFaq = async (idFaq: number, updateFaqDto: UpdateFaqDto): Promise<string> => {
        const url = `https://femcodersclub-project.onrender.com/faq${idFaq}`; 
        try {
            const response = await axios.put(url, updateFaqDto);
            return response.data; 
        } catch (error) {
            throw new Error('Error updating FAQ: ' );
        }
    }

    const API_URL = 'https://femcodersclub-project.onrender.com/faq'
export const getFaq = async (): Promise<Faq[]> => {
    const response = await axios.get(API_URL);
    return response.data;
};