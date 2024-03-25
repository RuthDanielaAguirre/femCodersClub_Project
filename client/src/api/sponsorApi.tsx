import axios from "axios";
import { Sponsor } from "../types/types";

const url = 'https://femcodersclub-project.onrender.com/admin';
export const addSponsor = async (sponsorsName:string, sponsorsCompany:string, sponsorsEmail:string, sponsorsTelephone:string): Promise<Sponsor> => {
        const result = await axios.post(url, { sponsorsName:sponsorsName, sponsorsCompany:sponsorsCompany, sponsorsEmail:sponsorsEmail, sponsorsTelephone:sponsorsTelephone});
        return result.data;
}