export type ChildrenProps ={
    children: React.ReactNode
}
 export type User ={
    accesToken: string;
 }
export type RegisterDto = {}

export type SignUpFormData = {
    name: string;
    lastName: string;
    gender: string;
    phoneNumber: string;
    email: string;
    password: string;
    confirmPassword?: string,
}