// import { ChildrenProps, Sponsor } from '../types/types'
import { createContext, useContext } from 'react';
import { Sponsor } from '../types/types'

// type SponsorsType = [Sponsors | null, Dispatch<Sponsor>];

// export const SponsorContext = createContext <SponsorsType>([null, () => { }]);
export const SponsorContext = createContext <Sponsor | undefined>(undefined);

export const useSponsorContext = () => {

	const sponsors = useContext(SponsorContext);

	if(sponsors === undefined) {
		throw new Error('useSponsorContext must be used with a SponsorContext');
	}
	return sponsors

};