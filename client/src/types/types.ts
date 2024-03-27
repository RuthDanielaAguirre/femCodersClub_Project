export type ChildrenProps ={
    children: React.ReactNode
}

export type User = {
    accesToken: string;
}

export type SignUpFormData = {
    name: string;
    lastName: string;
    gender: string;
    phoneNumber: string;
    email: string;
    password: string;
    confirmPassword?: string,
}

export type Sponsor ={
    id: number;
    sponsorsName: string;
    sponsorsCompany: string;
    sponsorsEmail: string;
    sponsorsTelephone: string;
}

export type AddSponsorFormData ={
    sponsorsName: string;
    sponsorsCompany: string;
    sponsorsEmail: string;
    sponsorsTelephone: string;
}

export type Faq ={
    idFaq: number;
    faqQuestion: string;
    faqAnswer: string;
}

export type AddFaqFormData ={
    faqQuestion: string;
    faqAnswer: string;

}