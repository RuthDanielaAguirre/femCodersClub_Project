import { createContext, useContext } from 'react';
import { Sponsor } from '../types/types';

const initialState:Sponsor = {
	idPotential_Sponsors: "",
	sponsorsName: "",
	sponsorsCompany: "",
	sponsorsEmail: "",
	sponsorsTelephone: "",
}

export const SponsorContext = createContext <Sponsor>(initialState);

export const useSponsorContext = () => {
	const sponsors = useContext(SponsorContext);

	if(sponsors === undefined) {
		throw new Error('useSponsorContext must be used with a SponsorContext');
	}
	return sponsors

};