
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/firebase";
import { toast } from "react-hot-toast";

export const fileToUrlLink = async (file: File, fileType: string) => {
    if (file) {
        const fileRef = ref(storage, `${fileType}/${Date.now() + file.name}`);
        const res = await uploadBytes(fileRef, file);
        const fileUrl = await getDownloadURL(res.ref);
        toast.success('File uploaded successfully');
        return fileUrl;
    }
    else console.log('Invalid file');
}

export const deleteStorage = async (fileUrl: string) => {
    try {
        const fileRef = ref(storage, fileUrl);
        await deleteObject(fileRef);
        toast.success('File removed from storage');
    } catch (error) {
        console.error('Error deleting file:', error);
        toast.error('File not removed from storage');
    }
}