
export interface NavListType {
    name: String,
    link: string,
    icon?: React.ReactNode,
}

export interface membersType {
    _id: string
    name: string,
    position: string,
    email: string,
    photo: string,
    phone: number | null,
    year: string | number,
    dept: string,
    socialLinks: {
        facebook: string | URL,
        instagram: string | URL,
        linkedin: string | URL
    }
}

export type InitiativesType = {
    header: string,
    details: string
}

export interface TestimonialsType {
    content: string,
    author: string,
    designation: string
}