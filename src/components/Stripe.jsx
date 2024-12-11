import React from 'react'

const Stripe = ({val}) => {
  return (
    <div className='w-[16.66%] border-t-[1.2px]  flex justify-between items-center px-3 py-4 border-b-[1.2px] border-r-[1.2px] '>
        <img src= {val.url} alt="" />
        <span className='text-white font-semibold'>{val.number}</span>

    </div>
  )
}

export default Stripe