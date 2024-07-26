import { Modal } from 'flowbite-react';
import { Form, Formik } from 'formik';
import React, { FC, useState } from 'react'
import InputField from '../form/InputField';
import PhotoUpload from '../form/FileInput';
import AddFields from '../form/AddFields';
import axios from 'axios';
import toast from 'react-hot-toast';
import { eventRegValidation } from '@/utils/schemaValidate';
import SelectionField from '../form/SelectionField';
import { dept, year } from '@/utils/data';

type props = {
    open: boolean;
    closed: () => void;
    fields: eventRegistrationType;
}

const RegistrationModal: FC<props> = ({ open, closed, fields }) => {
    const [loading, setLoading] = useState(false);

    const handelSubmit = async (values: eventRegistrationType, { resetForm }: any) => {
        setLoading(true);
        try {
            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/event/register`, values);
            toast.success(data.message);
            closed();
            resetForm();
        } catch (error: any) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            setLoading(false);
        }
    }
    return (
        <>
            <Modal show={open} onClose={closed} size={'3xl'} className='z-[999]'>
                <Modal.Header>
                    Event Registration
                </Modal.Header>
                <Modal.Body className='max-xs:!px-2'>
                    <Formik
                        enableReinitialize={true}
                        initialValues={fields}
                        onSubmit={handelSubmit}
                        validationSchema={eventRegValidation}
                    >
                        {({ values }) => (
                            <Form>
                                <div className='grid mlg:grid-cols-2 gap-x-6 max-xs:text-sm font-medium mb-3'>
                                    <div className='flex items-center'>
                                        <h1 className='opacity-85 me-2'>Event Id:</h1>
                                        <p className=''>{values.eventId}</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <h1 className=' opacity-85 me-2'>Event Name:</h1>
                                        <p className='font-semibold'>{values.eventName}</p>
                                    </div>
                                </div>
                                <PhotoUpload
                                    name="teamLogo"
                                    label="Team Logo (only 1 photo)"
                                />
                                <div className='grid xs:grid-cols-2 gap-x-6'>
                                    <InputField
                                        label="Team Name"
                                        name="teamName"
                                        placeholder='Enter team name'
                                        type="text"
                                    />
                                    <InputField
                                        label="Project Name"
                                        name="projectName"
                                        placeholder='Enter project name'
                                        type="text"
                                    />
                                </div>
                                <InputField
                                    isInput={false}
                                    label="Project Description"
                                    name="projectDescription"
                                    placeholder='Enter project description'
                                    type="text"
                                />
                                <div className='mt-5'>
                                    <h1 className='text-lg font-medium border-b mb-2'>Team Leader</h1>
                                    <div className='grid xs:grid-cols-2 gap-x-6'>
                                        <InputField
                                            label="Name"
                                            name="leaderName"
                                            placeholder='Enter name'
                                            type="text"
                                        />
                                        <InputField
                                            label="Email"
                                            name="email"
                                            placeholder='Enter email'
                                            type="email"
                                        />
                                    </div>
                                    <div className='grid xs:grid-cols-3 gap-y-2 xs:gap-6'>
                                        <InputField
                                            label="Phone"
                                            name="phone"
                                            placeholder='Enter phone number'
                                            type="text"
                                        />
                                        <SelectionField
                                            label="Branch"
                                            name={`leaderBranch`}
                                            data={dept}
                                        />
                                        <SelectionField
                                            label="Year"
                                            name={`leaderYear`}
                                            data={year}
                                        />
                                    </div>

                                </div>
                                <AddFields name="members" values={values.members} />
                                <div className='mt-5 flex items-center '>
                                    <button type='submit' disabled={loading} className='btn max-xs:w-32 me-4 xs:me-8'>
                                        {loading ? 'Loading...' : 'Register'}
                                    </button>
                                    <button type='reset' className='btn max-xs:w-32 !bg-red-500'>Reset</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </Modal.Body>
            </Modal>

        </>
    )
}

export default RegistrationModal
