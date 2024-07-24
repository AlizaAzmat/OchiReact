import { motion, useAnimation } from 'framer-motion';
import { Power4 } from 'gsap/all';
import React from 'react';

function Featured() {
    
const cards = [useAnimation(), useAnimation()];
const handleHoverStart =(index) => {
    cards[index].start({y: "0"})
}

const handleHoverEnd =(index) => {
    cards[index].End({y: "100%"})
}


   
  return (
    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
            <h1 className='text-5xl font-["Neue_Montreal"] tracking-tight '>Featured Projects</h1>
        </div>
        <div className='px-20'>
        <div className="cards w-full flex gap-10 mt-20">
          
        <motion.div onHoverStart={()=> handleHoverStart(0)} className='cardcontainer relative  w-1/2  h-[75vh]'>
          
                    <h1 className='absolute flex -right-32 overflow-hidden -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] z-[9] leading-none tracking-tighter text-6xl'>
                    {"FYDE".split("").map((item,index)=>
                    (
                    <motion.span initial={{y: "100%"}} animate={cards[0]} className='inline-block'>{item}</motion.span>))}</h1>
                   
                   
                    <div className='card overflow-hidden w-full h-full rounded-xl '>
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="" />
                    </div>
                </motion.div>


                <motion.div onHoverStart={()=> handleHoverStart(0)} className='cardcontainer relative  w-1/2  h-[75vh]'>
          
          <h1 className='absolute flex -right-32 overflow-hidden -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] z-[9] leading-none tracking-tighter text-6xl'>
          {"VISE".split("").map((item,index)=>
          (
          <motion.span initial={{y: "100%"}} animate={cards[0]} className='inline-block'>{item}</motion.span>))}</h1>
         
         
          <div className='card overflow-hidden w-full h-full rounded-xl '>
              <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png" alt="" />
          </div>
      </motion.div>

                
            </div>
        </div>


       
</div>
               
  )
}

export default Featured