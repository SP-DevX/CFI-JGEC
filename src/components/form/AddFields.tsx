import { FieldArray } from 'formik';
import React, { FC } from 'react'
import InputField from './InputField';
import SelectionField from './SelectionField';
import { MdDelete } from 'react-icons/md';
import { dept, year } from '@/utils/data';

type props = {
    name: string
    values: teamMembersType[]
}

const AddFields: FC<props> = ({ name, values }) => {
    return (
        <div>
            <FieldArray name={name}>
                {({ remove, push }) => (
                    <div className='mt-5'>
                        <div className=' border-b mb-2 flex items-center justify-between'>
                            <h1 className='text-lg font-medium'>Team Members</h1>
                            <button
                                type='button'
                                onClick={() =>
                                    push({
                                        name: "",
                                        phone: "",
                                        branch: "",
                                        year: ""
                                    })
                                }
                                className='text-primary text-[15px] font-semibold mb-0 pb-0'
                            >
                                Add member
                            </button>
                        </div>
                        {
                            values.map((member, index) => (
                                <div className='grid xs:grid-cols-2 md:grid-cols-12 gap-x-2' key={index}>
                                    <div className='md:col-span-4'>
                                        <InputField
                                            label="Name"
                                            name={`members[${index}].name`}
                                            placeholder='Enter name'
                                            type="text"
                                        />
                                    </div>
                                    <div className='md:col-span-4'>
                                        <InputField
                                            label="Phone"
                                            name={`members[${index}].phone`}
                                            placeholder='Enter phone number'
                                            type="text"
                                            className='col-span-4'
                                        />
                                    </div>
                                    <div className='md:col-span-2'>
                                        <SelectionField
                                            label="Branch"
                                            name={`members[${index}].branch`}
                                            data={dept}
                                        />
                                    </div>
                                    <div className='md:col-span-2 flex items-center gap-x-2'>
                                        <SelectionField
                                            label="Year"
                                            name={`members[${index}].year`}
                                            data={year}
                                        />
                                        <button
                                            type='button'
                                            onClick={() => remove(index)}
                                            className='mt-3'
                                        >
                                            <MdDelete size={20} className='text-red-500' />
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )}
            </FieldArray>
        </div>
    )
}

export default AddFields
