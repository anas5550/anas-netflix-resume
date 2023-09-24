import React from 'react';
import { RiGraduationCapLine } from 'react-icons/ri';
import { ImLocation } from 'react-icons/im';
import { FaUniversity, FaNodeJs, FaReact } from 'react-icons/fa';
import { AiFillHtml5, AiOutlineGithub } from 'react-icons/ai';
import { MdOutlineSportsScore } from 'react-icons/md';
import { DiCss3 } from 'react-icons/di';
import { TbBrandJavascript } from 'react-icons/tb';
import { BiLogoTailwindCss, BiLogoVisualStudio, BiLogoCPlusPlus, BiBrain } from 'react-icons/bi';
import { SiMui, SiExpress, SiPostman } from 'react-icons/si';
import { PiFileSql } from 'react-icons/pi';
import { BsDatabaseDash, BsGit, BsFiletypeJson, BsClipboardData } from 'react-icons/bs';

const Skills = () => {
    return (
        <div className='container-fluid my-4'>

            <div className='row'>
                <p className='text-white text-2xl font-semibold heading uppercase' >Skills</p>

                <div className="col-md-2 rounded-md max-h-[250px] overflow-y-scroll  bg-[#2D2D2D] py-4 flex flex-col justify-start items-start mx-2 my-2">
                    <p className='text-white text-2xl p-0'>Frontend</p>
                    <p className='text-white flex justify-start my-2 items-start p-0'>
                        <AiFillHtml5 color="#E50914" size={25} className='mr-2' />
                        HTML</p>
                    <p className='text-white flex justify-start my-2 items-start p-0'>
                        <DiCss3 color="#E50914" size={25} className='mr-2' />CSS</p>
                    <p className='text-white flex justify-start my-2 items-start p-0'>
                        <TbBrandJavascript color="#E50914" size={25} className='mr-2' />JavaScript</p>
                    <p className='text-white flex justify-start my-2 items-start p-0'>
                        <FaReact color="#E50914" size={25} className='mr-2' />
                        React.js</p>
                    <p className='text-white flex justify-start my-2 items-start p-0'>
                        <FaReact color="#E50914" size={25} className='mr-2' />
                        React Native</p>
                    <p className='text-white flex justify-start my-2 items-start p-0'>
                        <BiLogoTailwindCss color="#E50914" size={25} className='mr-2' />
                        Tailwind CSS</p>
                    <p className='text-white flex justify-start my-2 items-start p-0'>
                        <SiMui color="#E50914" size={25} className='mr-2' />
                        Material UI</p>
                    <p className='text-white flex justify-start my-2 items-start p-0'>
                        <DiCss3 color="#E50914" size={25} className='mr-2' />
                        Maintine UI</p>
                </div>

                <div className="col-md-2 rounded-md max-h-[250px] overflow-y-scroll  bg-[#2D2D2D] py-4 flex flex-col justify-start items-start mx-2 my-2">
                    <p className='text-white text-2xl p-0'>Backend</p>
                    <p className='text-white flex justify-start my-2 items-start p-0'>
                        <FaNodeJs color="#E50914" size={25} className='mr-2' />
                        Node.js</p>
                    <p className='text-white flex justify-start my-2 items-start p-0'>
                        <SiExpress color="#E50914" size={25} className='mr-2' />Express.js</p>
                    <p className='text-white flex justify-start my-2 items-start p-0'>
                        <PiFileSql color="#E50914" size={25} className='mr-2' />SQL</p>
                    <p className='text-white flex justify-start my-2 items-start p-0'>
                        <BsDatabaseDash color="#E50914" size={25} className='mr-2' />
                        SSMS</p>
                </div>

                <div className="col-md-2 rounded-md max-h-[250px] overflow-y-scroll  bg-[#2D2D2D] py-4 flex flex-col justify-start items-start mx-2 my-2">
                    <p className='text-white text-2xl p-0'>Tools</p>
                    <p className='text-white flex justify-start my-2 items-start p-0'>
                        <SiPostman color="#E50914" size={25} className='mr-2' />
                        Postman</p>
                    <p className='text-white flex justify-start my-2 items-start p-0'>
                        <BiLogoVisualStudio color="#E50914" size={25} className='mr-2' />VS Code</p>

                    <p className='text-white flex justify-start my-2 items-start p-0'>
                        <BsGit color="#E50914" size={25} className='mr-2' />Git</p>
                    <p className='text-white flex justify-start my-2 items-start p-0'>
                        <AiOutlineGithub color="#E50914" size={25} className='mr-2' />GitHub</p>
                </div>

                <div className="col-md-2 rounded-md max-h-[250px] overflow-y-scroll  bg-[#2D2D2D] py-4 flex flex-col justify-start items-start mx-2 my-2">
                    <p className='text-white text-2xl p-0'>Programming Languages</p>
                    <p className='text-white flex justify-start my-2 items-start p-0'>
                        <BiLogoCPlusPlus color="#E50914" size={25} className='mr-2' />
                        C++</p>
                    <p className='text-white flex justify-start my-2 items-start p-0'>
                        <BiLogoCPlusPlus color="#E50914" size={25} className='mr-2' />C</p>

                    <p className='text-white flex justify-start my-2 items-start p-0'>
                        <TbBrandJavascript color="#E50914" size={25} className='mr-2' />JavaScript</p>
                </div>

                <div className="col-md-2 rounded-md max-h-[250px] overflow-y-scroll  bg-[#2D2D2D] py-4 flex flex-col justify-start items-start mx-2 my-2">
                    <p className='text-white text-2xl p-0'>Others</p>
                    <p className='text-white flex justify-start my-2 items-start p-0'>
                        <BsClipboardData color="#E50914" size={25} className='mr-2' />
                        Data Structures and Algorithm</p>
                    <p className='text-white flex justify-start my-2 items-start p-0'>
                        <BiBrain color="#E50914" size={25} className='mr-2' />Problem Solving</p>

                    <p className='text-white flex justify-start my-2 items-start p-0'>
                        <BsFiletypeJson color="#E50914" size={25} className='mr-2' />JSON</p>
                </div>

            </div>
        </div>
    )
}



export default Skills