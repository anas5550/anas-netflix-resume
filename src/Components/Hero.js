import React from 'react';
import { BsPlayCircle } from 'react-icons/bs';

import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';




const Hero = () => {
    return (
        <div className='container-fluid'>
            <div className="row">

                <div className='col-md-4 bg-[#2D2D2D] flex flex-col justify-center items-center shadow-md'>
                    <p className='text-4xl my-4 text-center text-[#E50914] uppercase' id="myname">Mohd. Anas Siddiqui</p>
                    <div className='flex  justify-center items-center'>
                        <div className='bg-white inline-block px-8 shadow-md mr-4'>
                            <button className='text-black flex justify-between items-center px-1 py-2'>
                                <BsPlayCircle color="#E50914" size={25} className='mr-2' /> Play
                            </button>
                        </div>
                        <div className='bg-yellow-400 inline-block px-8 shadow-md'>
                            <button className='text-black flex justify-between items-center px-1 py-2'>
                                <AiOutlineInfoCircle color="#E50914" size={25} className='mr-2' /> Play
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-md-8">
                    <p className='text-center uppercase  flex justify-start items-center heading'>
                        <BsFillPersonFill color="#E50914" size={25} className='' />
                        What's new
                    </p>
                    <p className='text-white text-justify'>
                        He is a passionate software engineer based in Lucknow, UP, with a strong affinity for emerging technologies such as React.js, Node.js, JavaScript, and SQL. Known for his inquisitive and enthusiastic approach to learning, he continually explores new tools and techniques in web and mobile development.
                        When he is not engrossed in coding or working on his startup, he can be found indulging in his hobbies of singing, songwriting, and exploring new places.
                        With a specialization in Frontend, he takes pride in writing highly optimized code and creating elegant user interfaces. His meticulous attention to detail ensures that the code he writes is efficient and effective.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Hero;