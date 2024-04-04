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

export const useMemberContext = () => {
	const members = useContext(MemberContext);

	if(members === undefined) {
		throw new Error('must be used with a MemberContext');
	}
	return members

};