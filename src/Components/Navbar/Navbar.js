import React from 'react'
import Logo from '../../assets/Logo_Netflix.png';
import { ImLocation } from 'react-icons/im';
import { MdOutlineEmail } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';
import { FaLinkedin, FaGithub } from 'react-icons/fa';





const Navbar = () => {
    return (
        <nav className='container-fluid'>

            <div className='flex justify-between items-center flex-wrap'>
                <img src={Logo} alt="Logo" className='h-[80px] w-auto ' />
                <div className='flex justify-center items-center flex-wrap'>
                    <p className='text-white mx-2 flex justify-center items-center hover:underline text-[20px]'>
                        <ImLocation color="#E50914" size={25} /> Lucknow, UP
                    </p>
                    <p className='text-white mx-2 flex justify-center items-center hover:underline text-[20px]'>
                        <MdOutlineEmail color="#E50914" size={25} /> email
                    </p>
                    <p className='text-white mx-2 flex justify-center items-center hover:underline text-[20px]'>
                        <BsTelephone color="#E50914" size={25} /> +91-8127775550
                    </p>
                    <p className='text-white mx-2 flex justify-center items-center hover:underline text-[20px]'>
                        <FaLinkedin color="#E50914" size={25} />  linkedIn
                    </p>
                    <p className='text-white mx-2 flex justify-center items-center hover:underline text-[20px]'>
                        <FaGithub color="#E50914" size={25} /> github
                    </p>
                </div>
            </div>

        </nav>
    )
}


export default Navbar