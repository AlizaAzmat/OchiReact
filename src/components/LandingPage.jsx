import { motion } from 'framer-motion';
import React from 'react'

import { FaArrowUpLong } from 'react-icons/fa6';
function LandingPage() {
 
  return (
    <div data-scroll data-scroll-speed="-.3" data-scroll-section className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-32 px-20'>
            {["We Create" , "Eye Opening" , "Presentations"].map(( item, index )=> {
                return  <div className='masker'>
                   <div className='w-fit flex items-end overflow-hidden'>
                    {index === 1 && (< motion.dev 
                     initial={{width:0}}
                      animate={{width:"9vw"}} 
                      transition={{ease:[0.76, 0, 0.24, 1], duration: 1}} className="w-[8vw] h-[6vw] relative   top-[1vw] bg-red-500"></motion.dev>) }
                   <h1 className="uppercase text-[7vw] leading-[6vw] tracking-targeted font-['Founders Grotesk X-Condensed'] font-bold">
                {item}
                </h1>
                   </div>
               
            </div>

            })}

        </div>
        <div className="border-t[1px] border-zinc-600 mt-20 flex justify-between items-center py-5 px-20">
            {["For public & private companies" , "From the first pitch to IPO"].map((item,index)=>(<p className='text-md font-light tracking-tight leading-none'>{item}</p>))}
            <div className='start flex items-center gap-5'>
                <div className='px-5 py-2 border-[1px] border-zinc-500 rounded-full font-light text-sm uppercase pb-2'>Start the Project</div>
                <div className='w-10 h-10 border-[2px] flex items-center justify-center border-zinc-400 rounded-full'>
                  <span className="rotate-[45deg]">
                    <FaArrowUpLong/>
                  </span>  
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default LandingPage