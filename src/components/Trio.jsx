import React from 'react'

function Trio() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5'>
        <div className='cardcontainer h-[50vh] w-1/2'>
            <div className='card relative w-full rounded-xl h-full bg-[#004D43] flex items-center justify-center'>
                <img className='w-26 h-14 ' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full'>&copy;2019-2022</button>
            
            </div>
        </div>
        <div className='cardcontainer flex gap-5 w-1/2 h-[50vh]'>
        <div className='card relative flex items-center justify-center w-1/2 h-full rounded-xl bg-[#082a25]'>
        <img className='w-26 h-14 ' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        <button className='absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full'>&copy;2019-2022</button>
            
        </div>
        <div className='card relative flex items-center justify-center w-1/2 h-full rounded-xl bg-[#082a25]'>
        <img className='w-20 h-20 ' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        <button className='absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full'>&copy;2019-2022</button>
            
        </div>
        </div>
    </div>
  )
}

export default Trio