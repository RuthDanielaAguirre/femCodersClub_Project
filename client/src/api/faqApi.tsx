import axios from "axios";
import { Faq } from "../types/types";
import {UpdateFaqDto} from "../../../server/src/faq/dto/update-faq.dto";

export const addFaq = async (faqQuestion:string, faqAnswer:string): Promise<Faq> => {
        const result = await axios.post(`${import.meta.env.VITE_API_URL}/faq`, { faqQuestion:faqQuestion, faqAnswer:faqAnswer, });
        return result.data;
}
export const updateFaq = async (idFaq: number, updateFaqDto: UpdateFaqDto): Promise<string> => {
        const url = `${import.meta.env.VITE_API_URL}/faq${idFaq}`; 
        try {
            const response = await axios.put(url, updateFaqDto);
            return response.data; 
        } catch (error) {
            throw new Error('Error updating FAQ: ' );
        }
}

export const getFaq = async (): Promise<Faq[]> => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/faq`);
    return response.data;
};