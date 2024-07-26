"use client"

import Title from '@/components/common/Title'
import { Table, TextInput, Modal } from 'flowbite-react';
import React, { useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { HiSearch } from 'react-icons/hi'
import { MdCloudDownload } from 'react-icons/md'

const ParticularCertificate: React.FC = () => {
    const [view, setView] = useState(false);
    return (
        <>
            <Title title={`Certificates`} />
            <div className='w-full min-h-screen commonBg'>
                <div className='w-full h-full max-w-[1148px] mx-auto bg-bg_1 shadow-shadow_1 backdrop-blur-md rounded-lg p-8 my-8'>
                    <div className='w-[20rem] mb-6'>
                        <TextInput icon={HiSearch} placeholder='Search here...' className="focus:ring-transparent outline-none" />
                    </div>
                    <Modal show={view} onClose={() => setView(false)}  className="z-[9999] overflow-x-hidden">
                        <Modal.Header>My certificate</Modal.Header>
                        <Modal.Body>
                            <iframe src='https://firebasestorage.googleapis.com/v0/b/cfi-jgec.appspot.com/o/certificate%2FICICI-2023%2F459c8d12-31f3-4844-a60f-c64197556f21Self%20Declaration.pdf?alt=media&token=2c10a016-38a2-4dd4-b4d9-253f0b03819d' className='w-full h-screen object-contain'></iframe>
                        </Modal.Body>
                    </Modal>
                    <div className="overflow-x-auto border rounded-md shadow-lg bg-white">
                        <Table hoverable>
                            <Table.Head>
                                <Table.HeadCell className="bg-gray-200">SL. No.</Table.HeadCell>
                                <Table.HeadCell className="bg-gray-200">student name</Table.HeadCell>
                                <Table.HeadCell className="bg-gray-200">ref. no.</Table.HeadCell>
                                <Table.HeadCell className="bg-gray-200">year</Table.HeadCell>
                                <Table.HeadCell className="bg-gray-200">dept.</Table.HeadCell>
                                <Table.HeadCell className="bg-gray-200">event name</Table.HeadCell>
                                <Table.HeadCell className="bg-gray-200">action</Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                <Table.Row className="bg-white">
                                    <Table.Cell>1.</Table.Cell>
                                    <Table.Cell className="whitespace-nowrap capitalize font-medium text-gray-800">
                                        swadesh pal
                                    </Table.Cell>
                                    <Table.Cell>21101106027</Table.Cell>
                                    <Table.Cell>1<span>st</span></Table.Cell>
                                    <Table.Cell>IT</Table.Cell>
                                    <Table.Cell className="whitespace-nowrap uppercase">ICIC-2023</Table.Cell>
                                    <Table.Cell className=" flex items-center space-x-3">
                                        <MdCloudDownload size={20} cursor={'pointer'} />
                                        <span>|</span>
                                        <FaEye size={20} cursor={'pointer'} onClick={() => setView(true)} />
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row className="bg-white">
                                    <Table.Cell>1.</Table.Cell>
                                    <Table.Cell className="whitespace-nowrap capitalize font-medium text-gray-800">
                                        swadesh pal
                                    </Table.Cell>
                                    <Table.Cell>21101106027</Table.Cell>
                                    <Table.Cell className="ordinal">1st</Table.Cell>
                                    <Table.Cell>IT</Table.Cell>
                                    <Table.Cell className="uppercase">ICIC-2023</Table.Cell>
                                    <Table.Cell className=" flex items-center space-x-3">
                                        <MdCloudDownload size={20} cursor={'pointer'} />
                                        <span>|</span>
                                        <FaEye size={20} cursor={'pointer'} onClick={() => setView(true)} />
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row className="bg-white">
                                    <Table.Cell>1.</Table.Cell>
                                    <Table.Cell className="whitespace-nowrap capitalize font-medium text-gray-800">
                                        swadesh pal
                                    </Table.Cell>
                                    <Table.Cell>21101106027</Table.Cell>
                                    <Table.Cell>1<span>st</span></Table.Cell>
                                    <Table.Cell>IT</Table.Cell>
                                    <Table.Cell className="uppercase">ICIC-2023</Table.Cell>
                                    <Table.Cell className=" flex items-center space-x-3">
                                        <MdCloudDownload size={20} cursor={'pointer'} />
                                        <span>|</span>
                                        <FaEye size={20} cursor={'pointer'} onClick={() => setView(true)} />
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </div>
                    <div className="flex justify-end mt-6 text-gray-800 space-x-4">
                        <button className='w-20 py-1.5 bg-white rounded-md'>Prev</button>
                        <button className='w-20 py-1.5 bg-white rounded-md'>Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ParticularCertificate
