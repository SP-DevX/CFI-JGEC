declare interface toolType {
    _id: string,
    name: string,
    photo: string,
    modelNo?: string,
    qty: string,
}
declare interface contactFromInputType {
    name: string,
    email: string,
    mobile: string,
    message: string,
}

declare interface noticeType {
    _id: string,
    title: string,
    description: string
    link: string,
    date: string,
}

declare interface galleryPhotoType {
    _id: string,
    title: string,
    date: string,
    photo: string,
}

declare interface alumniCardType {
    _id: string,
    year: string,
}

declare interface membersType {
    _id: string
    name: string,
    position: string,
    email: string,
    photo: string,
    phone: number
    year: string
    dept: string,
    socialLinks: {
        facebook: string
        instagram: string
        linkedin: string
    }
}

declare interface eventCardType {
    _id: string
    eventId: string
    date: string
    description: string
    event_end_time: string
    event_start_time: string
    fullName: string
    organizer: string
    photo: string
    prizes: string
    reg_date_end: string
    reg_date_start: string
    rules: string
    shortName: string
    venue: string
    createdAt: string
    updatedAt: string
    isCompleted?: boolean
}

declare interface eventRegistrationType {
    eventId: string,
    eventName: string,
    teamName: string
    teamLogo: string
    projectName: string
    projectDescription: string
    leaderName: string
    phone: string
    email: string
    leaderBranch: string,
    leaderYear: string,
    members: teamMembersType[]
}

declare interface teamMembersType {
    name: string
    phone: string
    branch: string
    year: string
}

declare interface registerTeamsType extends eventRegistrationType {
    _id: string
    isApproved: boolean
    positions: string
    prize: string
    message: string
}

declare interface projectType {
    _id?: string
    projectName: string
    projectDescription: string
    files: null | string[]
    liveLink: string
    studentName: string
    mobile: string
    branch: string
    year: string
    college: string,
    isApproved?: boolean
}

declare interface reviewType {
    _id: string,
    name: string,
    profession: string,
    message: string,
}