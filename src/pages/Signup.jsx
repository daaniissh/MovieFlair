import React, { useEffect, useState } from 'react'
import Header from '../comp/Header'
import AnimatePage from '../animation/AnimatePage'
import { motion } from 'framer-motion'
import Footer from '../comp/Footer'
import useHandleChange from '../hooks/useHandleChange'
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
  const navigate = useNavigate();

  const initialState = {
    username: '',
    password: '',
    email: ""
  };
  const { values, handleChange } = useHandleChange(initialState)
  const [error, setError] = useState({
    username: "",
    password: "",
    email: ""
  })
  let data = localStorage.getItem('userData')
  // useEffect(() => {

  // }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.username !== "" && values.password.length > 6) {


      localStorage.setItem("login", true);
      localStorage.setItem("userData", JSON.stringify(values));
      // navigate('/')
      let login = localStorage.getItem('login');
      if (login) {
        navigate(-1)
      }

    }
    if (values.username === "") {
      e.preventDefault();
      setError((prevValues) => ({
        ...prevValues,

        username: "Username are required"
      }));
    }
    if (values.password.length < 6) {
      e.preventDefault();

      setError((prevValues) => ({
        ...prevValues,
        password: "Password atLeast 6"
      }));
    }
    if (values.email === "") {
      e.preventDefault();

      setError((prevValues) => ({
        ...prevValues,
        email: "email is required"
      }));
    }
    // const currentValue = localStorage.getItem('isAuth');





    console.log(values);
    // console.log(values,"==result");   

  }
  return (
    <>
      <Header logoutButton={false} marginRight="50px" />
      <div className="w-full h-screen  flex justify-center items-center dark:bg-white/40 bg-[#000]/50">

        <AnimatePage initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} >

          <form onSubmit={handleSubmit} action="" className='p-12  max-h-[420px] sm:max-h-[480px] rounded-[5px] dark:bg-white dark:text-gray-500 bg-[#000000BF]  flex flex-col ' >

            <h2 className='font-roboto font-bold text-[20px] sm:text-[32px] mb-[10px] md:mb-[25px] leading-[38px]' >Sign up</h2>

            <input onChange={handleChange} value={values.email} placeholder='Email' className='bg-[#333333]  dark:text-black dark:bg-gray-300 text-[#8C8C8C] font-roboto p-2 sm:p-3 text-[15px] outline-none rounded-[5px] mb-[10px]' type="email" name="email" id="" />
            {error && <span className='text-[14px] mb-1 text-red-700' >{error.email}</span>}

            <input onChange={handleChange} value={values.username} placeholder='Username' className='bg-[#333333]  dark:text-black dark:bg-gray-300 text-[#8C8C8C] font-roboto p-2 sm:p-3 text-[15px] outline-none rounded-[5px] mb-[10px]' type="text" name="username" id="" />

            {error && <span className='text-[14px] mb-1 text-red-700' >{error.username}</span>}

            <input onChange={handleChange} value={values.password} placeholder='Password' className='bg-[#333333]  dark:bg-gray-300 dark:text-black text-[#8C8C8C] p-2 sm:p-3 font-roboto outline-none text-[15px] rounded-[5px] mb-[10px]' type="password" name="password" id="" />
            {error && <span className='text-[14px] mb-1 text-red-700' >{error.password}</span>}
            <motion.button whileTap={{ scale: 1.1 }} type='submit' className='hover:bg-[#e50914e0] dark:text-white bg-[#E50914] p-2 mt-3 sm:mt-5 rounded-[5px]' >Sign up</motion.button>
            {/* <span className='text-right text-[12px] mt-1 text-[#B3B3B3]'>Forgot Password?</span> */}
            <div className="flex justify-center w-full h-full text-center cursor-pointer  mt-[30px]">


              <h4 onClick={() => navigate("/login")} className='text-[#737373] font-roboto font-semibold dark:hover:text-black hover:text-white  w-full  text-[15px] ' >back to login</h4>


            </div>
          </form>
        </AnimatePage>
      </div>
      <Footer whichComp={true} />

    </>
  )
}

export default SignUp