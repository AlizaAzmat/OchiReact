import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className="font-['Neue_Montreal'] text-[4vw]  leading-[4.5vw]">Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
    <div className='w-full flex gap-5 border-t-[1px] mt-20 border-[#a1b562]'>
        <div className='w-1/2'>
            <h1 className='text-4xl pt-10'>Our Approach</h1>
            <button className='flex uppercase gap-10 items-center px-8 py-4 bg-zinc-900 rounded-full mt-6 text-white' >READ MORE
            <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
             </button>
        </div>
        <div className='  w-1/2 h-[70vh]  ]'>
          <img className='aboutimg rounded-3xl ' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
        </div>
    </div>
    </div>
  )
}

export default About