import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
      <div className='max-w-screen-xl py-10 flex gap-32 mx-auto text-white'>
        <div className='basis-1/2'>
        <h1 className='text-[11rem] font-semibold leading-none tracking-tight'>Refokus.</h1>
        </div>
        <div className='basis-1/2 flex gap-4'>
        <div className='basis-1/3 '>
            <h4 className='mb-10 text-zinc-500'>socials</h4>
           { ["instagram","twitter (x?)", "Linkedin"].map((item,index) => <a className='mt-3 block text-zinc-600 capitalize'>{item}</a>)}
        </div>
        <div className='basis-1/3 '>
            <h4 className='mb-10 text-zinc-500'>socials</h4>
           { ["instagram","twitter (x?)", "Linkedin"].map((item,index) => <a className='mt-3 block text-zinc-600 capitalize'>{item}</a>)}
        </div>
        <div className='basis-1/2 flex flex-col items-end'>
            <p className='text-right'>Refokus is pioneering digital agency driven by design and empowered by technology.</p>
            <img src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg" className='w-32 mt-10 ' alt="" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
