import axios from "axios";
import { Sponsor } from "../types/types";

const url = 'https://femcodersclub-project.onrender.com/admin';
export const addSponsor = async (sponsorsName:string, sponsorsCompany:string, sponsorsEmail:string, sponsorsTelephone:string): Promise<Sponsor> => {
        const result = await axios.post(url, { sponsorsName:sponsorsName, sponsorsCompany:sponsorsCompany, sponsorsEmail:sponsorsEmail, sponsorsTelephone:sponsorsTelephone});
        return result.data;
};

export const getSponsors = async (): Promise<Sponsor[]> => {
        const response = await axios.get(url);
        return response.data;
};

export const updateSponsor = async (idPotential_Sponsors: string, updatedSponsor:{sponsorsName:string, sponsorsCompany:string, sponsorsEmail:string, sponsorsTelephone:string}): Promise<Sponsor> => {
        const response = await axios.put(`${url}/${idPotential_Sponsors}`, updatedSponsor);
        return response.data;
};

export const deleteSponsor = async (idPotential_Sponsors: string): Promise<Sponsor> => {
        const response = await axios.delete(`${url}/${idPotential_Sponsors}`);
        return response.data;
};

