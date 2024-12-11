import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const Button  = ({title = "Get Started"}) => {
  return (
<div className='w-40 px-4 py-2 bg-zinc-100 flex items-center justify-between text-black rounded-full'> 
    <span className='text-sm font-medium'>{title}</span>
    < FaArrowRight></FaArrowRight>
    </div>
  )
}

export default Button 