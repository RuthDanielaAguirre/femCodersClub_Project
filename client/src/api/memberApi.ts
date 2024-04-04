import axios from "axios";
import { Member } from "../types/types";
import { UpdateMemberDto } from "../../../server/src/member/dto/update-member.dto";


const url = 'https://femcodersclub-project.onrender.com/member'
export const getMember = async (): Promise<Member[]> => {
    const response = await axios.get(url);
    return response.data;
};

export const addMember = async (memberName:string, memberLastName:string,memberDescription:string, memberRole:string, memberImage:string): Promise<Member> => {
    const result = await axios.post(url, { memberName:memberName, memberLastName:memberLastName,  memberDescription:memberDescription, memberRole:memberRole, memberImage:memberImage});
    return result.data;
};

export const updateMember = async (idMember: number, updateMemberDto: UpdateMemberDto): Promise<void> => {
    const url = `https://femcodersclub-project.onrender.com/member/${idMember}`; 
    try {
        const response = await axios.put(url, updateMemberDto);
        return response.data; 
    } catch (error) {
        throw new Error('Error updating member ' );
    }
}


export const deleteMember = async (idMember: number): Promise<Member> => {
    const response = await axios.delete(`${url}/${idMember}`);
    return response.data
};