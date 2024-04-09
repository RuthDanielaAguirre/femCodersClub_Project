import axios from "axios";
import { Sponsor } from "../types/types";

export const addSponsor = async (sponsorsName:string, sponsorsCompany:string, sponsorsEmail:string, sponsorsTelephone:string): Promise<Sponsor> => {
        const result = await axios.post(`${import.meta.env.VITE_API_URL}/admin`, { sponsorsName:sponsorsName, sponsorsCompany:sponsorsCompany, sponsorsEmail:sponsorsEmail, sponsorsTelephone:sponsorsTelephone});
        return result.data;
};

export const getSponsors = async (): Promise<Sponsor[]> => {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/admin`);
        return response.data;
};

export const updateSponsor = async (idPotential_Sponsors: string, updatedSponsor:{sponsorsName:string, sponsorsCompany:string, sponsorsEmail:string, sponsorsTelephone:string}): Promise<Sponsor> => {
        const response = await axios.put(`${import.meta.env.VITE_API_URL}/admin/${idPotential_Sponsors}`, updatedSponsor);
        return response.data;
};

export const deleteSponsor = async (idPotential_Sponsors: string): Promise<Sponsor> => {
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}/admin/${idPotential_Sponsors}`);
        return response.data;
};

