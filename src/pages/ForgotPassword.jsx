import React, { useEffect, useState } from 'react'
import Header from '../comp/Header'
import AnimatePage from '../animation/AnimatePage'
import { motion } from 'framer-motion'
import Footer from '../comp/Footer'
import useHandleChange from '../hooks/useHandleChange'
import { useNavigate } from 'react-router-dom';
const ForgotPassword = () => {

const navigate  = useNavigate()
  const initialState = {
    email: '',
  };
  const { values, handleChange } = useHandleChange(initialState)
  const [error, setError] = useState({
    email: ""
  })



  const handleSubmit = (e) => {
    e.preventDefault();

    if (values.email === "") {
      e.preventDefault();
      setError((prevValues) => ({
        ...prevValues,

        email: "Username are required"
      }));
    }



  }
  return (
    <>
      <Header logoutButton={false} marginRight="50px" />
      <div className="w-full h-screen flex justify-center items-center dark:bg-white/40 bg-[#000]/50">

        <AnimatePage initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} >

          <form onSubmit={handleSubmit} action="" className='p-10  max-h-[320px] sm:max-h-[380px] rounded-[5px] dark:bg-white dark:text-gray-500 bg-[#000000BF]  flex flex-col ' >

            <h2 className='font-roboto font-bold text-[20px] sm:text-[32px] mb-[10px] md:mb-[25px] leading-[38px]' >Change password</h2>

            <input onChange={handleChange} value={values.email} placeholder='Email' className='bg-[#333333] dark:text-black dark:bg-gray-300 text-[#8C8C8C] font-roboto p-2 sm:p-3 text-[15px] outline-none rounded-[5px] mb-[10px]' type="email" name="email" id="" />

            {error && <span className='text-[14px] mb-1 text-red-700' >{error.email}</span>}


            <motion.button whileTap={{ scale: 1.1 }} type='submit' className='hover:bg-[#e50914e0] dark:text-white bg-[#E50914] p-2 mt-3 sm:mt-5 rounded-[5px]' >Submit</motion.button>
            {/* <span className='text-right text-[12px] mt-1 text-[#B3B3B3]'>Forgot Password?</span> */}
            <div className="flex justify-center text-center w-full h-full items-end mt-[30px]">
            <h4 onClick={() => navigate("/login")} className='text-[#737373] font-roboto font-semibold dark:hover:text-black hover:text-white cursor-pointer  w-full  text-[15px] ' >back to login</h4>

            </div>
          </form>
        </AnimatePage>
      </div>
      <Footer whichComp={true} />

    </>
  )
}

export default ForgotPassword