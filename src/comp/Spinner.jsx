import React from 'react'
import { MutatingDots  } from 'react-loader-spinner'

function Spinner() {
  return (
    <div className=' absolute top-0 left-0 w-full h-screen flex justify-center items-center flex-row'>
      <MutatingDots 
        height="100"
        width="100"
        color="#fff"
        secondaryColor= '#eee'
        radius='12.5'
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  )
}

export default Spinner