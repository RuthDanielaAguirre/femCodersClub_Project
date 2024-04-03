import axios from "axios";
import { Member } from "../types/types";


const url = 'https://femcodersclub-project.onrender.com/member'
export const getMember = async (): Promise<Member[]> => {
    const response = await axios.get(url);
    return response.data;
};

export const addMember = async (memberName:string, memberLastName:string, memberRole:string, memberDescription:string, memberImage:string): Promise<Member> => {
    const result = await axios.post(url, { memberName:memberName, memberLastName:memberLastName, memberImage:memberImage, memberDescription:memberDescription, memberRole:memberRole});
    return result.data;
};

export const updateMember = async (idMember: number, updatedMember:{memberName:string, memberLastName:string, memberDescription:string, memberRole:string, memberImage:string}): Promise<Member> => {
    const response = await axios.put(`${url}/${idMember}`, updatedMember);
    return response.data;
};

export const deleteMember = async (idMember: number): Promise<Member> => {
    const response = await axios.delete(`${url}/${idMember}`);
    return response.data;
};
