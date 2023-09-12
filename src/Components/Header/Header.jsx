import React from 'react'
import profile from "/images/profile.png"

const Header = () => {
  return (
    <div className='mx-auto container flex items-center justify-between border-b-2 p-2 cursor-pointer'>
        <h1 className=' text-[20px] md:text-[40px] text-[#111] font-bold'>Knowledge 
        <span className='bg-[darkgreen] p-[5px] rounded-[10px] text-[white] mx-[5px]'>Cafe</span></h1>
        <img src={profile} alt='profile'/>
    </div>
  )
}

export default Header
