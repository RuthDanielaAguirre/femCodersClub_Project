import { Dispatch, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useLocalStorage } from "./useLocalStorage";


type ChildrenProps ={
    children: React.ReactNode
}
type User ={
    accesToken: string;
}

type CurrentUserType =[User | null, Dispatch<User>];

export const useAuthContext = createContext<CurrentUserType>([null,()=>{}]);

    export const AuthProvider =({children}: ChildrenProps) =>{
        const navigate= useNavigate();
        const [currentUser, setCurrentUser]= useLocalStorage('user', '');
       
        useEffect(()=>{
         (()=>!currentUser || currentUser.accesToken === ''? navigate('/login') : null)();
        }, [currentUser]);
  
  return (
        <useAuthContext.Provider value={[currentUser, setCurrentUser]}>
            {children} 
            
        </useAuthContext.Provider>
     )} 
