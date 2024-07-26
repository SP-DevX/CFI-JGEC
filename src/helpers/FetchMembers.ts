import axios from "axios";

export const getMembers = async () => {
    try {
        const { data } = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/members`
        );
        return data.members;
    } catch (error) {
        console.log(error);
        alert("Could not get members");
        return [];
    }
}
export const getTools = async () => {
    try {
        const { data } = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/stock`
        );
        return data.components;
    } catch (error) {
        console.log(error);
        alert("Could not get members");
        return [];
    }
}