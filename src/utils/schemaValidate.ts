import * as yup from "yup";

export const eventRegValidation = yup.object({
    teamName: yup.string().required("Team Name is required"),
    teamLogo: yup.string().required("Team Logo is required"),
    projectName: yup.string().required("Project Name is required"),
    projectDescription: yup.string().required("Project Description is required"),
    leaderName: yup.string().required("Leader Name is required"),
    leaderBranch: yup.string().required("Leader branch is required"),
    leaderYear: yup.string().required("Leader year is required"),
    phone: yup
        .string()
        .min(10, "Phone number must be at least 10 characters")
        .max(12, "Phone number at most 12 characters")
        .required("Leader phone no is required"),
    email: yup
        .string()
        .email("Invalid email")
        .required("Leader email is required"),
    members: yup.array().of(
        yup.object().shape({
            phone: yup
                .string()
                .min(10, "Phone number must be at least 10 characters")
                .max(12, "Phone number at most 12 characters")
                .required("Phone no is required"),
            name: yup.string().required("Name is required"),
            branch: yup.string().required("Branch is required"),
            year: yup.string().required("Year is required"),
        })
    ),
});


export const reviewValidation = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    profession: yup.string().required("Profession is required"),
    message: yup.string().max(500, "You can write at most 300 characters").required("Message is required"),
})

export const projectValidation = yup.object().shape({
    projectName: yup.string().required("Project name is required"),
    projectDescription: yup.string().required("Project description is required"),
    files: yup.mixed().required("Project files are required"),
    liveLink: yup.string().required("Live link is required"),
    studentName: yup.string().required("Student name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    mobile: yup
        .string()
        .min(10, "Phone number must be at least 10 characters")
        .max(12, "Phone number at most 12 characters")
        .required("Leader phone no is required"),
    branch:  yup.string().required("Branch is required"),
    year: yup.string().required("Year is required"), 
});