import React from 'react'
import loader from "../../public/loader.gif";

const Loading = () => {
  return (
    <div className='w-screen h-screen flex justify-center flex-col items-center'>
      <img src={loader} alt="" width='100px' />
      <p className='mt-5 font-bold text-white'>LOADING...</p>
    </div>
  )
}

export default Loading
