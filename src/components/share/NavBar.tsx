"use client"
import { useState } from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation'
import Link from 'next/link';
import Navlink from './NavLink';

const NavBer = () => {

    const [toggle, setToggle] = useState(false);
    

    return (
        <main className='sticky z-[1200] py-3 bg-white top-0'>
            <div className='container flex items-center justify-between'>
                {/* <Link href="/"><Image className='w-44' src="" alt='' /></Link> */}
                <Link href="/"><h1 className='text-2xl font-bold'>Life Care</h1></Link>

                <span className='md:hidden'>
                    {
                        toggle ? <AiOutlineCloseCircle onClick={() => setToggle(!toggle)} /> : <HiMenuAlt1 onClick={() => setToggle(!toggle)} />
                    }
                </span>
                <ul className={`font-semibold  flex items-center duration-300 flex-col py-5 md:p-0 text-white bg-opacity-90 md:text-black top-20 bg-black md:bg-transparent w-full md:w-auto md:flex-row gap-6   absolute md:static z-50 ${toggle ? "left-0" : "-left-full"}`}>
                    <li className='hover:text-[#4e4feb] hover:duration-500' onClick={()=>setToggle(false)}>
                        <Navlink href="/">
                            Home
                        </Navlink>
                    </li>
                    <li className='hover:text-[#4e4feb] hover:duration-500' onClick={()=>setToggle(false)}>
                        <Navlink href="/about">
                            About
                        </Navlink>
                    </li>
                    <li className='hover:text-[#4e4feb] hover:duration-500' onClick={()=>setToggle(false)}>
                        <Navlink href="/our-projects">
                            Our Project
                        </Navlink>
                    </li>
                    <li className='hover:text-[#4e4feb] hover:duration-500' onClick={()=>setToggle(false)}>
                        <Navlink href="/our-team">
                            Our Team
                        </Navlink>
                    </li>
                    <li className='hover:text-[#4e4feb] hover:duration-500' onClick={()=>setToggle(false)}>
                        <Navlink href="/service">
                            Service
                        </Navlink>
                    </li>
                    <Link href="/contact"><button className='px-4 py-2 btn '>Contact</button></Link>
                </ul>
            </div>
        </main>
    );
};

export default NavBer;