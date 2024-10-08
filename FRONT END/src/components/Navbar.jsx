import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { TfiMenu } from "react-icons/tfi";
import { IoPerson } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoExpand } from "react-icons/io5";
import { Modal } from 'antd';
import Login from './Login';
import Register from './Register';
import Caseform from './Caseform';



export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isOpenLogIn, setIsOpenLogIn] = useState(false)
  const [isOpenRegister, setIsOpenRegister] = useState(false)
  const [isOpenCaseform, setIsOpenCaseform] = useState(false)
  
  // const darkMode = useSelector((state) => state.darkMode.value)
  // const dispatch = useDispatch()
  const navigation = [
    {
      id: 1,
      name: "Mainpage",
      link: "/"
    },
    {
      id: 2,
      name: "Dashboard",
      link: "/dashboard"
    },
    {
      id: 3,
      name: ()=><p onClick={()=>setIsOpenRegister(true)}>register</p>,
    },
    {
      id: 4,
      name: ()=><p onClick={()=>setIsOpenLogIn(true)}>login</p>,
    
    },
    {
      id: 5,
      name: ()=><p onClick={()=>setIsOpenCaseform(true)}>Caseform</p>
     
    },
  ]


  return (
    <section className={`pt-5 `}>
      <div className={`lg:flex lg:justify-between `} >
      <div className='flex justify-between px-4  pb-5' >
        <h1 className='text-[1.5rem] text-white '>𝖑𝖎𝖌𝖍𝖙 𝖔𝖋 𝖑𝖎𝖋𝖊</h1>
      </div>

        <div className={` grid place-items-center mx-auto lg:mx-0  lg:flex ${menuOpen ? 'h-fit ' : 'h-0 overflow-hidden'}  lg:h-fit     transition-all `}>
          <ul className={`grid place-items-center gap-3 lg:flex  ${menuOpen ? 'h-48 block mb-12' : 'h-0 overflow-hidden'} lg:mb-5 lg:mr-5 lg:h-auto  lg:gap-6 transition-all `}>
            {
              navigation.map(it => (
                <NavLink key={it.id} onClick={()=>setMenuOpen(false)} className={({ isActive }) => `${isActive && ' text-orange-700'} text-white block hover:text-teal-500 `} to={it.link}>{it.name}</NavLink>
              ))
            }

          </ul>

        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className=' text-[1.3rem] text-white    lg:hidden absolute top-7 right-[10px]'><TfiMenu /></button>
      </div>
      <Modal
      open={isOpenRegister}
      onCancel={()=>setIsOpenRegister(false)}
      footer={false}>
        <div><Register/></div>
      </Modal>
      <Modal
      open={isOpenLogIn}
      onCancel={()=>setIsOpenLogIn(false)}
      footer={false}>
        <div><Login/></div>
      </Modal>
      <Modal
      open={isOpenCaseform}
      onCancel={()=>setIsOpenCaseform(false)}
      footer={false}>
        <div><Caseform /></div>
      </Modal>
    </section>
  )
}



