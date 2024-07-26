"use client"

import axios from "axios";
import { Spinner } from "flowbite-react";
import React, { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
    const [inputData, setInputData] = useState({
        name: "",
        email: "",
        mobile: "",
        message: "",
    })
    const [loading, setLoading] = useState(false);

    const handelChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setInputData({ ...inputData, [name]: value })
    }

    const SaveResponse = async (e: any) => {
        e.preventDefault();
        try {
            setLoading(true);
            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/contact/create`, inputData); 
            toast.success("Thank you for contacting us. We will get back to you soon.");
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong. Please try again later.");
        } finally {
            setLoading(false);
            setInputData({
                name: "",
                email: "",
                mobile: "",
                message: "",
            })
        }
    }

    return (
        <form onSubmit={SaveResponse} className="space-y-4">
            <input
                type="text"
                placeholder="Name*"
                className=" py-3 px-4 text-white placeholder:text-white bg-transparent border w-full rounded-md outline-none capitalize"
                required
                name="name"
                value={inputData.name}
                onChange={handelChange}
            />
            <input
                type="email"
                placeholder="Email*"
                className=" py-3 px-4 text-white placeholder:text-white bg-transparent border w-full rounded-md outline-none"
                name="email"
                required
                value={inputData.email}
                onChange={handelChange}
            />
            <input
                type="text"
                placeholder="Mobile No*"
                className=" py-3 px-4 text-white placeholder:text-white bg-transparent border w-full rounded-md outline-none"
                required
                name="mobile"
                value={inputData.mobile}
                onChange={handelChange}
                minLength={10}
                maxLength={12}
            />
            <textarea
                rows={3}
                placeholder="Message*"
                className=" py-3 px-4 text-white placeholder:text-white bg-transparent border w-full rounded-md outline-none resize-none"
                required
                name="message"
                value={inputData.message}
                onChange={handelChange}
            />
            <button
                type={"submit"}
                disabled={loading}
                className={`${loading ? "bg-primary/70  cursor-wait" : "bg-primary"} text-white font-medium text-center w-full py-3 text-lg rounded-md cursor-pointer tracking-[1px] flex items-center justify-center gap-x-4`}
            >
                {loading && <Spinner color="success" />}
                <p className="mt-0.5">Submit</p>
            </button>
        </form>
    );
};

export default ContactForm;
