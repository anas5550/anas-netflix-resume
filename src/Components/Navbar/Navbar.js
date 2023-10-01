import React from 'react'
import Logo from '../../assets/Logo_Netflix.png';
import { ImLocation } from 'react-icons/im';
import { MdOutlineEmail } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className='container-fluid'>

            <div className='flex justify-between items-center flex-wrap'>
                <img src={Logo} alt="Logo" className='h-[80px] w-auto' id="logo" />
                <div className='flex justify-center items-center flex-wrap'>
                    <Link to="mailto:anas91612@gmail.com?body=Hi Anas" className='text-white mx-2 flex justify-center items-center hover:underline text-[20px]'>
                        <MdOutlineEmail color="#E50914" size={25} />
                    </Link>

                    <Link to="https://www.linkedin.com/in/anas91612/" target='_blank' className='mx-2 text-white flex justify-center items-center hover:underline text-[20px]'>
                        <FaLinkedin color="#E50914" size={25} />
                    </Link>
                    <Link to="https://github.com/anas5550" target='_blank' className='text-white mx-2 flex justify-center items-center hover:underline text-[20px]'>
                        <FaGithub color="#E50914" size={25} />
                    </Link>
                    <Link to="tel:+918127775550" className='text-white mx-2 flex justify-center items-center hover:underline text-[20px]'>
                        <BsTelephone color="#E50914" size={25} />
                    </Link>
                    <p className='text-white mx-2 flex justify-center items-center hover:underline text-[20px]'>
                        <ImLocation color="#E50914" size={25} /> Lucknow, UP
                    </p>
                </div>
            </div>
        </nav>
    )
}


export default Navbar