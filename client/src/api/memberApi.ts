import axios from "axios";
import { Member } from "../types/types";
import { UpdateMemberDto } from "../../../server/src/member/dto/update-member.dto";

export const getMember = async (): Promise<Member[]> => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/member`);
    return response.data;
};

export const addMember = async (memberName:string, memberLastName:string,memberDescription:string, memberRole:string, memberImage:string, memberLinkedin:string): Promise<Member> => {
    const result = await axios.post(`${import.meta.env.VITE_API_URL}/member`, { memberName:memberName, memberLastName:memberLastName,  memberDescription:memberDescription, memberRole:memberRole, memberImage:memberImage, memberLinkedin:memberLinkedin });
    return result.data;
};

export const updateMember = async (idMember: number, updateMemberDto: UpdateMemberDto): Promise<void> => {
    const url = `${import.meta.env.VITE_API_URL}/member/${idMember}`; 
    try {
        const response = await axios.put(url, updateMemberDto);
        return response.data; 
    } catch (error) {
        throw new Error('Error updating member ' );
    }
}


export const deleteMember = async (idMember: number): Promise<Member> => {
    const response = await axios.delete(`${import.meta.env.VITE_API_URL}/member/${idMember}`);
    return response.data
};