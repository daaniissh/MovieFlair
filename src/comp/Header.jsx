import React, { memo, useContext, useEffect, useState } from 'react'
import Logo from '../assets/mainIcon.png'
import AnimatePage from '../animation/AnimatePage'
import { MdLogout } from "react-icons/md";
import { FaMoon, FaSun, FaUser, FaUserCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import { AlertContext } from '../contaxt/alertContext';
const Header = ({ logoutButton, marginRight }) => {
  const navigate = useNavigate();
  const { openHandler, setOpen } = useContext(AlertContext)
  let mr = marginRight
  const [drop, setDrop] = useState(false)
  const [userData, setUserData] = useState(localStorage.getItem('userData'))
  const data = JSON.parse(userData);
  const [darkMode, setDarkMode] = useState(false);


  const toggleDarkMode = () => {
    console.log(darkMode);
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());

    document.documentElement.classList.toggle('dark', newDarkMode);
  };
  useEffect(() => {
    const darkModePreference = localStorage.getItem('darkMode');
    setDarkMode(darkModePreference === "true");
  }, []);
  return (
    <>
      <header className='absolute w-full h-[90px] select-none dark:bg-white/90 dark:shadow-[-3.5px_24px_32px_-21.5px_#000000] bg-black/10' >
        <div className="flex justify-between w-full">
          <div className="flex items-center">
            <AnimatePage initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{
              ease: "easeInOut",
              duration: 0.5
            }} ><div className='ml-[20px] sm:ml-[45px] mt-[10px] sm:mt-[20px] mb-[19px]' >
                <img src={Logo} alt="" />
              </div>
            </AnimatePage>
            <AnimatePage initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} > <h1 className="logo-res text-[#D62D30] ml-[3px] sm:ml-[10px]   sm:logo" >MovieFlair</h1></AnimatePage>
          </div>

          <AnimatePage initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }} >
            <div className={`select-none  ease-in-out duration-300 flex group  mt-[10px]   sm:mt-[20px]  cursor-pointer   items-center sm:mr-[150px]  mr-[50px]   rounded-2xl text-center  w-[45px] h-[45px] `}>

              <span style={{ padding: "10px" }} className='select-none text-[25px] text-center ease-in duration-75 rounded-xl hover:bg-white hover:text-black px-2 pt-3 dark:text-orange-600 text-[#fff] font-main  '  >
                {darkMode ? <FaSun onClick={toggleDarkMode} /> : <FaMoon onClick={toggleDarkMode} />}
              </span>

              {logoutButton && <div className="hover:bg-[#e6e6e6f8] select-none  flex gap-2 rounded-xl text-black font-main dark:bg-gray-300 bg-white p-[10px] flex-row  ml-[10px] items-center">
                <h4 className='hidden sm:block select-none '>{data.username}</h4>

                <label htmlFor="" onClick={() => setOpen(true)} >  <MdLogout title='Logout' className="" /></label>
                {/* <label className="btn"></label> */}



              </div>}
            </div>
          </AnimatePage>

        </div>

      </header>
    </>
  )
}

export default memo(Header)