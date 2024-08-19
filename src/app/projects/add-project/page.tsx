"use client"

import Title from "@/components/common/Title";
import InputField from "@/components/form/InputField";
import SelectionField from "@/components/form/SelectionField";
import { dept, year } from "@/utils/data";
import { projectValidation } from "@/utils/schemaValidate";
import { deleteStorage, fileToUrlLink } from "@/utils/UploadFile";
import axios from "axios";
import { FileInput, Label } from "flowbite-react";
import { ErrorMessage, Form, Formik } from "formik";
import Image from "next/image";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import dynamic from "next/dynamic"; 
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const AddProject = () => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const photoref = useRef(null);

  const generateURL = async (e: any, setFieldValue: any) => {
    setLoading(true);
    const fileName = `Projects/project-${Date.now()}`
    try {
      const file = e.target.files;
      let photos: string[] = [];
      for (let i = 0; i < file.length; i++) {
        const url = await fileToUrlLink(file[i], fileName);
        if (url) photos.push(url);
      }
      setPhotos(photos);
      setFieldValue("files", photos);
    } catch (error) {
      console.log(error);
      toast.error("Error in generating URL");
    } finally {
      setLoading(false);
      // @ts-ignore
      photoref.current.value = null;
    }
  }

  const deletePhoto = async (id: string, values: projectType) => {
    const newPhotos = photos.filter((photo) => photo !== id);
    setPhotos(newPhotos);
    values.files = newPhotos;
    deleteStorage(id);
  }

  const submitProject = async (values: projectType, { resetForm }: any) => { 
    try {
      setLoading(true);
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/projects/add`, values); 
      toast.success(data.message);
      resetForm();
      setPhotos([]);
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message || "Error in submitting project");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section>
      <Title title={`Add Project`} />
      <div className="w-full min-h-screen commonBg xl:px-4">
        <div className="layout max-xs:p-0 xs:my-6">
          <div className=" bg-white h-auto p-4 sm:p-8 xs:rounded-lg">
            <Formik
              initialValues={{
                projectName: "",
                projectDescription: "",
                files: null,
                liveLink: "",
                studentName: "",
                email: "",
                mobile: "",
                branch: "",
                year: "",
                college: "",
              }}
              onSubmit={submitProject}
              validationSchema={projectValidation}
            >
              {({ setFieldValue, values }) => (
                <Form>
                  <h1 className="font-semibold text-gray-900 text-2xl pb-2 border-b mb-4">
                    Student Details
                  </h1>
                  <div className="grid xxs:grid-cols-2 md:grid-cols-4 xxs:gap-3 mlg:gap-6">
                    <InputField
                      label="Name/Team name*"
                      name="studentName"
                      type="text"
                      placeholder="Enter your or team name"
                    />
                    <InputField
                      label="Mobile No*"
                      name="mobile"
                      type="text"
                      placeholder="Enter your mobile no"
                    />
                    <SelectionField
                      label="Branch"
                      name={`branch`}
                      data={dept}
                    />
                    <SelectionField
                      label="Year"
                      name={`year`}
                      data={year}
                    />
                  </div>
                  <div className="grid xxs:grid-cols-2 xxs:gap-3 mlg:gap-6">
                    <InputField
                      label="Email*"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                    <InputField
                      label="College Name (if other)"
                      name="college"
                      type="text"
                      placeholder="Enter your college name"
                    />
                  </div>
                  <h1 className="font-semibold text-gray-900 text-2xl pb-2 border-b mt-8 mb-4 ">
                    Project Details
                  </h1>
                  <div>
                    <InputField
                      label="Project Name*"
                      name="projectName"
                      type="text"
                      placeholder="Enter your project name"
                    />
                    <div>
                      <div className="mb-1 block opacity-85 relative">
                        <Label
                          htmlFor={"photos"}
                          value={"Upload project photos (choose multiple files at a time and size < 2MB each)"}
                        />
                      </div>
                      <FileInput
                        ref={photoref}
                        name="files"
                        multiple
                        onChange={(event) => generateURL(event, setFieldValue)}
                        disabled={loading}
                      />
                      <ErrorMessage component={'div'} name={'files'} className="text-red-600 text-xs mt-1" />
                      <div className="flex justify-start flew-wrap my-4 gap-3 mlg:gap-6">
                        {photos.map((photo, index) => (
                          <div key={index} className="relative w-auto h-32 flex flex-col items-center ">
                            <Image
                              src={photo}
                              alt="project photo"
                              width={100}
                              height={80}
                              objectFit="w-full object-cover"
                            />
                            <button
                              type="button"
                              onClick={() => deletePhoto(photo, values)}
                              className="text-xl text-red-500 mt-2"
                            >
                              <MdDelete />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mb-1 block opacity-85">
                      <Label
                        htmlFor={"description"}
                        value={"Project Description"}
                      />
                    </div>
                    <ReactQuill
                      theme="snow"
                      placeholder="Enter your project description"
                      className=" h-72 xxs:h-64 mb-20 xxs:mb-14"
                      onChange={(value) => setFieldValue("projectDescription", value)}
                      value={values.projectDescription}
                    />
                    <ErrorMessage component={'div'} name={'projectDescription'} className="text-red-600 text-xs mt-1 mb-3" />
                    <InputField
                      label="Project video (upload on youtube and paste the link)"
                      name="liveLink"
                      type="text"
                      placeholder="Enter your project name"
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      disabled={loading}
                      type="submit"
                      className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddProject;
