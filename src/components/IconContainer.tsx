import React from 'react'

const IconContainer = ({ icon, label}: any) => {
  return (
    <div className="fade-in-up  flex flex-col items-center group hover:-translate-y-2 hover:opacity-100 transition ease-in-out duration-300">
        {icon}
        <div className="absolute bottom-0 flex flex-col items-center hidden mb-6 group-hover:flex">
        <span className=" z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg rounded-md">
           {label}
        </span>
        <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
        </div>
    </div>
  )
}

export default IconContainer