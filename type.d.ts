type BasicInfoType = {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    homeAddress: string;
    phoneNumber: string;
    dateOfBirth: string;
};

type SocialLinksType = {
    x: string;
    tiktok: string;
    instagram: string;
    youtube: string;
    linkedIn: string;
};

type ProfessionalInfoType = {
    jobTitle: string;
    education: string;
    workHistory: string;
    info: string;
    skills: string[];
    imageUrl: string;
};

type VisibilityType = {
    education: boolean;
    workHistory: boolean;
    phoneNumber: boolean;
    homeAddress: boolean;
    dateOfBirth: boolean;
};

type ReturnDataType = {
    basicInfo: {
        firstname: string;
        lastname: string;
        username: string;
        email: string;
        homeAddress: string;
        phoneNumber: string;
        dateOfBirth: string;
    },
    professionalInfo: {
        jobTitle: string;
        education: string;
        workHistory: string;
        info: string;
        skills: string[];
        imageUrl: string;
    },
    socialLinks: {
        x: string;
        tiktok: string;
        instagram: string;
        youtube: string;
        linkedIn: string;
    },
    visibility: {
        education: boolean;
        workHistory: boolean;
        phoneNumber: boolean;
        homeAddress: boolean;
        dateOfBirth: boolean;
    }
}