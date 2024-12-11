import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='w-full '>
        <div className='max-w-screen-xl mx-auto flex py-20 gap-2 '>
            <Card width={"basis-1/3"} start={false} para={true} hover={false} ></Card>
            <Card width={"basis-2/3"} start={true} para={false} hover={true}></Card>
        </div>
    </div>
  )
}

export default Cards