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

export type SignUpFormData = {
    name: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    password: string;
    confirmPassword: string,
}