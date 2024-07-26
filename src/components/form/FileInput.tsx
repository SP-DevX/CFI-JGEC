import { deleteStorage, fileToUrlLink } from "@/utils/UploadFile";
import { FileInput, Label, Spinner } from "flowbite-react";
import { useFormikContext } from "formik";
import Image from "next/image";
import { useState } from "react";
import { MdDelete } from "react-icons/md";

type props = {
    name: string;
    label: string;
};

export default function PhotoUpload({ name, label }: props) {
    const [photo, setPhoto] = useState("");
    const [loading, setLoading] = useState(false);
    const { setFieldValue } = useFormikContext();

    const deletePhoto = async () => {
        setLoading(true);
        await deleteStorage(photo);
        setFieldValue(name, "");
        setPhoto("");
        setLoading(false);
    }

    const handelUpload = async (e: any) => {
        setLoading(true);
        const url = await fileToUrlLink(e.target.files[0], "Register-Event");
        setFieldValue(name, url);
        setPhoto(url as string);
        setLoading(false);
    };

    return (
        <div className="w-full grid xs:grid-cols-2 gap-6 justify-between mb-3">
            <div className="w-full">
                <div className="mb-1 block opacity-85">
                    <Label htmlFor={label} value={label} />
                </div>
                <div className="flex !w-full items-center justify-center">
                    <Label
                        htmlFor="dropzone-file"
                        className="flex h-32 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                        <div className="flex flex-col items-center justify-center pb-6 pt-5">
                            <svg
                                className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 16"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                />
                            </svg>
                            <p className="mb-2 text-sm text-center text-gray-500 dark:text-gray-400">
                                <span className="font-semibold">Click to upload</span> or drag
                                and drop
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                SVG, PNG, JPG or{" "}
                            </p>
                        </div>
                        <FileInput
                            id="dropzone-file"
                            className="hidden"
                            accept="image/*"
                            name={name}
                            onChange={handelUpload}
                        />
                    </Label>
                </div>
            </div>
            <div>
                <div className="mb-1 block opacity-85">
                    <Label htmlFor={"Preview"} value={"Preview"} />
                </div>
                <div className={`w-full h-32 `}>
                    {loading && (
                        <div className="w-full h-full flex items-center justify-center gap-x-2">
                            <Spinner />
                            Loading....
                        </div>
                    )}
                    {photo && !loading && (
                        <div className="flex items-center gap-x-6">
                            <Image
                                src={photo}
                                alt="photo"
                                width={200}
                                height={100}
                                className="w-auto h-32 object-contain"
                            />
                            <button
                                type="button"
                                onClick={deletePhoto}
                                className="text-2xl text-red-500"
                            >
                                <MdDelete />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
}
