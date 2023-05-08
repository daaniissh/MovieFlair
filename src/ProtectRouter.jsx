import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const ProtectRouter = ({comp}) => {
  let navigate = useNavigate()
  useEffect(() => {
     let login = localStorage.getItem('login');
     if(!login){
        navigate('/login')
     }
  }, [])
  
  return (
    <>
      {comp}
    </>
  )
}

export default ProtectRouter