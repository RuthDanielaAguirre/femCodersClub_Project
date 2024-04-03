import { createContext, useContext } from 'react';
import { Member } from '../types/types';


const initialState:Member = {

    idMember: 0,
    memberName: "",
    memberLastName: "",
    memberDescription: "",
    memberRole: "",
    memberImage: ""
}
export const MemberContext = createContext <Member>(initialState);

export const useSponsorContext = () => {
	const members = useContext(MemberContext);

	if(members === undefined) {
		throw new Error('useMemberContext must be used with a SponsorContext');
	}
	return members

};