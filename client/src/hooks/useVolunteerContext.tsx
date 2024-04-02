import { useContext } from "react"
import { createContext } from "react";
import { Volunteer } from "../types/types";

const initialState:Volunteer ={
    idVolunteer: "",
    volunteerName: "",
    volunteerLastName: "",
    volunteerEmail: "",
    volunteerGender: "",
}
export const VolunteerContext = createContext <Volunteer>(initialState);

export const useVolunteerContext = () => {
    const volunteer= useContext(VolunteerContext);
    if(volunteer === undefined){
        throw new Error('must be used with a VolunteerContext')
    }
  return volunteer 
}
