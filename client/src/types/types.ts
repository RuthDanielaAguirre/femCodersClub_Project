export type User = {
    accessToken: string;
}

export type RegisterDto = {
    name: string;
    lastname: string;
    gender?: string;
    phoneNumber?: string;
    email: string;
    password: string;
}