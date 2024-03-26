import axios from "axios";
import { Faq } from "../types/types";

const url = 'https://femcodersclub-project.onrender.com/faq';
export const addFaq = async (faqQuestion:string, faqAnswer:string): Promise<Faq> => {
        const result = await axios.post(url, { faqQuestion:faqQuestion, faqAnswer:faqAnswer, });
        return result.data;
}