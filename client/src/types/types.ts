export type ChildrenProps ={
    children: React.ReactNode
}
 export type User ={
    accesToken: string;
 }
export type RegisterDto = {
    name: string;
    lastname: string;
    gender?: string;
    phoneNumber?: string;
    email: string;
    password: string;
}