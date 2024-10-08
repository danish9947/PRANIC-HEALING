import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";





export default function Footer() {
  return (
    <div className='flex gap-4 justify-center hover:text-indigo-700'>

    <div className='text-white hover:text-indigo-700 ease-in-out duration-300'><button><FaFacebookF /></button></div>
    <div className='text-white hover:text-indigo-700 ease-in-out duration-300'><button><FaInstagram /></button></div>
    <div className='text-white hover:text-indigo-700 ease-in-out duration-300'><button><IoLogoYoutube /></button></div>
    <div className='text-white hover:text-indigo-700 ease-in-out duration-300'><button><FaLinkedin /></button></div>
    </div>
  )
}
