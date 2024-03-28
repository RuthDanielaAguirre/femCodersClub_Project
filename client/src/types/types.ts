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
    name: string;
    company: string;
    email: string;
    telephone: string;
}

export type AddSponsorFormData ={
    sponsorsName: string;
    sponsorsCompany: string;
    sponsorsEmail: string;
    sponsorsTelephone: string;
}

export type Volunteer={
    idVolunteer: number;
    volunteerName: string;
    volunteerLastName: string;
    volunteerEmail: string;
    volunteerGender: string;
}
export type Faq ={
    
    faqQuestion: string;
    faqAnswer: string;}


export type AddFaqFormData ={
    faqQuestion: string;
    faqAnswer: string;
}

export type EditFaqFormData ={
    
    faqQuestion: string;
    faqAnswer: string;

}
export type faq={
    idFaq: number;
    faqQuestion: string;
    faqAnswer: string;
}