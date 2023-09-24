import React from 'react';
import { RiGraduationCapLine } from 'react-icons/ri';
import { ImLocation } from 'react-icons/im';
import { FaUniversity } from 'react-icons/fa';
import { AiOutlineCalendar } from 'react-icons/ai';
import { MdOutlineSportsScore } from 'react-icons/md';





const Education = () => {
    return (
        <div className='container-fluid my-4'>

            <div className='row'>
                <p className='text-white text-2xl font-semibold heading uppercase'>Education</p>

                <div className="col-md-3 bg-[#2D2D2D] py-4 flex flex-col justify-start items-start mx-2 my-2 rounded-md">
                    <p className='text-white text-2xl p-0'>Graduation</p>
                    <p className='text-white flex justify-start my-2 items-start p-0'>
                        <RiGraduationCapLine color="#E50914" size={25} className='mr-2' />
                        Bachelor of Technology in computer science and engineering</p>
                    <p className='text-white flex justify-start my-2 items-start p-0'>
                        <FaUniversity color="#E50914" size={25} className='mr-2' />Loverly Professional University</p>
                    <p className='text-white flex justify-start my-2 items-start p-0'>
                        <MdOutlineSportsScore color="#E50914" size={25} className='mr-2' />7.64/10 CGPA</p>
                    <p className='text-white flex justify-start my-2 items-start p-0'>
                        <ImLocation color="#E50914" size={25} className='mr-2' />
                        Phagawara, jalandhar, Punjab, IN</p>
                    <button className='text-black flex justify-between items-center px-3 py-2 bg-[#B2B1B9] '>
                        <AiOutlineCalendar color="#E50914" size={25} /> 2019-2023
                    </button>
                </div>

                <div className="col-md-3 bg-[#2D2D2D] py-4 flex flex-col justify-start items-start mx-2 my-2 rounded-md">
                    <p className='text-white text-2xl p-0'>Intermediate</p>
                    <p className='text-white flex justify-start my-2 items-start p-0'>
                        <RiGraduationCapLine color="#E50914" size={25} className='mr-2' />
                        12th, PCM</p>
                    <p className='text-white flex justify-start my-2 items-start p-0'>
                        <FaUniversity color="#E50914" size={25} className='mr-2' />SKD Academy</p>
                    <p className='text-white flex justify-start my-2 items-start p-0'>
                        <MdOutlineSportsScore color="#E50914" size={25} className='mr-2' />90%</p>
                    <p className='text-white flex justify-start my-2 items-start p-0'>
                        <ImLocation color="#E50914" size={25} className='mr-2' />
                        Lucknow, IN</p>
                    <button className='text-black px-3 py-2 flex justify-between items-center bg-[#B2B1B9]'>
                        <AiOutlineCalendar color="#E50914" size={25} /> 2015-2017
                    </button>
                </div>

                <div className="col-md-3 bg-[#2D2D2D] py-4 flex flex-col justify-start items-start mx-2 my-2 rounded-md">
                    <p className='text-white text-2xl p-0'>10th</p>
                    <p className='text-white flex justify-start my-2 items-start p-0'>
                        <RiGraduationCapLine color="#E50914" size={25} className='mr-2' />
                        10th PCM </p>
                    <p className='text-white flex justify-start my-2 items-start p-0'>
                        <FaUniversity color="#E50914" size={25} className='mr-2' /> Jesys AND Mary Inter College</p>
                    <p className='text-white flex justify-start my-2 items-start p-0'>
                        <MdOutlineSportsScore color="#E50914" size={25} className='mr-2' />84%</p>
                    <p className='text-white flex justify-start my-2 items-start p-0'>
                        <ImLocation color="#E50914" size={25} className='mr-2' />
                        Lucknow, IN</p>
                    <button className='text-black px-3 py-2 flex justify-between items-center bg-[#B2B1B9]'>
                        <AiOutlineCalendar color="#E50914" size={25} /> 2015-2017
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Education