import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className="border-t-2 border-gray-600 pt-5 w-full h-100 text-center bottom-0 ">
            <Link href="/">
                <a className="">

                    <Image  src= '/img/RobertLogo.png' alt="rei" height = {14.3} width= {188}
                        className="flex " 
                        />
                </a>
            </Link>
            <div className=" py-5 flex justify-center text-center sm:text-xl">
          <p> Ilustrador Digital • Ilustrador Vetorial • Retrato Digital • Pixel Arte • Game Developer</p>
        </div>
        <div className="flex justify-center pb-5">
        <Link href="https://www.linkedin.com/in/robert-brant-5b42641a3/">
            <a target="_blank" className="hover:bg-blue-200 rounded-full">
                <FaLinkedinIn className="w-12 h-12 px-2"/>
            </a>
        </Link>
        

        <Link href="/">
            <a target="_blank" className="hover:bg-blue-200 rounded-full">
                <FaInstagram className="w-12 h-12 px-2"/>
            </a>
        </Link>
        <Link href="https://github.com/RobertWillian02">
            <a target="_blank" className="hover:bg-blue-200 rounded-full">
                <FaGithub className="w-12 h-12 px-2"/>
            </a>
        </Link>
        </div>
        </div>
        
    )
}