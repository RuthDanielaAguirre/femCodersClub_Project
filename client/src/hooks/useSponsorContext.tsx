import { createContext, useContext } from 'react';
import { Sponsor } from '../types/types'

export const SponsorContext = createContext <Sponsor | undefined>(undefined);

export const useSponsorContext = () => {
	const sponsors = useContext(SponsorContext);

	if(sponsors === undefined) {
		throw new Error('useSponsorContext must be used with a SponsorContext');
	}
	return sponsors

};