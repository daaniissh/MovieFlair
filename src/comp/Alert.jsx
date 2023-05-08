import React, { useContext } from 'react'
import { AlertContext } from '../contaxt/alertContext';
import { useNavigate } from 'react-router-dom';
// import AnimatePage from '../animation/AnimatePage';
import { motion } from 'framer-motion'

const Alert = () => {
  const navigate = useNavigate()
  const handleLogout = () => {

    localStorage.removeItem("login")
    localStorage.removeItem('userData');
    navigate('/login')

  }
  const {setOpen} = useContext(AlertContext)

  return (
 
    <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} className="alert shadow-lg dark:bg-slate-500 dark:font-semibold dark:text-black absolute bg-stone-900 z-[9999]  w-[200px] sm:w-[500px] right-10 bottom-10">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span>Are sure logout</span>
      </div>
      <div className="flex-none">
        <button className="btn btn-sm btn-ghost" onClick={()=>setOpen(false)} >Deny</button>
        <button className="btn btn-sm btn-primary"  onClick={handleLogout}>Accept</button>
      </div>
    </motion.div>
     
  )
}

export default Alert