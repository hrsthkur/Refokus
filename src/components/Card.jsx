import { motion } from 'framer-motion';
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";


export default function Card({width, start, para, hover}) {
  return (
    <motion.div whileHover={{backgroundColor : hover ==true && "#7443ff", padding: "25px"}} className={`  bg-zinc-800 p-5 rounded-xl hover:${hover} text-white ${width} min-h-[30rem] flex flex-col justify-between`}>
        <div>
        <div className={`w-full  flex justify-between items-center `}>
            <h3>one heading</h3>

            <IoIosArrowRoundForward />
        </div>
        <h1 className='text-3xl font-medium mt-10'>whatever it is</h1>
        </div>
    <div className='down w-full '>
        {
        start && (
            <>
             <h1 className='start text-6xl font-semibold tracking-tight leading-none'>start a project</h1>
            <button className='px-5 py-3 mt-5 rounded-full border-[1px] border-zinc-50'> Contact us</button>
</>
           
        ) 
    }
    {
     para && (
        <p className='text-sm text-zinc-500 font-medium'>Lorem ipsum dolor sit amet consectetur.</p>
        
     )
    }
       
    </div>
    </motion.div>
  )
}
