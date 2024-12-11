import { useMotionValueEvent, useScroll } from 'framer-motion'
import React, { useState } from 'react'

function Work() {
    const [images, setImages] = useState([
      {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png", top: "54%", left: "50%", isActive: false},
      {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png", top: "70%", left: "60%", isActive: false},
      {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png", top: "40%", left: "40%", isActive: false},
      {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png", top: "30%", left: "55%", isActive: false},
      {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png", top: "65%", left: "38%", isActive: false},
      {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png", top: "85%", left: "50%", isActive: false},
    ])
    
  
      const { scrollYProgress } = useScroll()

      scrollYProgress.on("change", (data) => {
        function imagesShow(arr){
          setImages(prev => (
            prev.map((items,index) => (
              arr.indexOf(index) == -1 ? (
                {...items,isActive:false}
              )
              :{...items,isActive:true}
            ))
          ))

        }

        switch(Math.floor(data*100)){
          case 0:
            imagesShow([])
            break;
        
          case 1:
            imagesShow([0])
            break;
        
          case 2:
            imagesShow([0,1])
            break;
            
          case 3:
            imagesShow([0,1,2])
            break;
          case 5:
            imagesShow([0,1,2,3])
            break;
          case 7:
            imagesShow([0,1,2,3,4])
            break;
          case 9:
            imagesShow([0,1,2,3,4,5])
            break;

        }
      })
        
      
      return (
    <div className='w-full '>
        <div className=' text-white text-center mt-28 mx-auto relative '>
            <h1 className='text-[30vw]  text-center tracking-tight font-medium select-none leading-none'>WORK</h1>
            <div className='absolute top-0 w-full h-full '>
            {images.map((elem,index)=> (elem.isActive &&  <img className='w-60 rounded-lg  absolute -translate-x-[50%] -translate-y-[50%] ' src={elem.url} style={{top: elem.top, left: elem.left}}/>) )}
            </div>
           
        </div>
       
      
    </div>
  )
}

export default Work
