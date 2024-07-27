"use client"

import Title from "@/components/common/Title";
import InputField from "@/components/form/InputField";
import { reviewValidation } from "@/utils/schemaValidate";
import axios from "axios";
import { Form, Formik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";


const Review: React.FC = async () => {
    const [loading, setLoading] = useState(false);

    const handelSubmit = async (values: any, { resetForm }: any) => {
        try {
            setLoading(true);
            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/review/create`, values); 
            resetForm();
            toast.success(data.message);
        } catch (error: any) {
            console.log(error);
            toast.error(error.response.data.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="w-full min-h-screen">
            <Title title={`Review`} />
            <div className="layout ">
                <div className="w-full max-w-xl mx-auto bg-white min-h-40 rounded-lg my-4 mb-8 p-8 py-5 ">
                    <h1 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">Give Review </h1>
                    <Formik
                        initialValues={{ name: "", email: "", profession: "", message: "" }}
                        onSubmit={handelSubmit}
                        validationSchema={reviewValidation}
                    >
                        {() => (
                            <Form>
                                <InputField
                                    name="name"
                                    type="text"
                                    placeholder="Enter name"
                                    label="Name*"
                                />
                                <InputField
                                    name="email"
                                    type="email"
                                    placeholder="Enter email"
                                    label="Email*"
                                />
                                <InputField
                                    name="profession"
                                    type="text"
                                    placeholder="Enter profession"
                                    label="Profession*"
                                />
                                <InputField
                                    isInput={false}
                                    name="message"
                                    type="text"
                                    placeholder="Enter message"
                                    label="Message*"
                                />
                                <button
                                    type="submit"
                                    className="btn w-36"
                                    disabled={loading}
                                >
                                    {loading ? "Loading..." : "Submit"}
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default Review;
