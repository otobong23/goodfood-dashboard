import React from 'react'

export default function Grid3() {
  return (
    <div className='relative h-80 md:h-auto'>
      <div className="pb-5 div">
        <h5 className='text-[15px] font-normal pb-2'>Your Rating</h5>
        <p className='text-xs text-[#737B8B] pb-6'>Lorem ipsum dolor sit amet, consectetur</p>
      </div>
      <div className="w-full h-auto circles">
        <div className="flex flex-col items-center justify-center w-[168.73px] h-[168.73px] rounded-full bg-[#F99C30] gap-2 circle1 absolute right-0 translate-y-5">
          <h5 className='text-[#fff] text-[33.75px]'>85%</h5>
          <h5 className='text-[#fff] text-[12.65px]'>Food Taste</h5>
        </div>
        <div className="flex flex-col items-center justify-center w-[103.76px] h-[103.76px] rounded-full bg-[#6463D6] gap-2 circle2 absolute left-1/2 -translate-x-3/4 opacity-70">
          <h5 className='text-[#fff] text-[20.75px]'>85%</h5>
          <h5 className='text-[#fff] text-xs'>Hygiene</h5>
        </div>
        <div className="flex flex-col items-center justify-center w-[122.35px] h-[122.35px] rounded-full bg-[#2FBFDE] gap-2 circle3 absolute left-0 bottom-0 md:-translate-y-3/4 translate-x-1/4">
          <h5 className='text-[#fff] text-2xl'>92%</h5>
          <h5 className='text-[#fff] text-xs'>Packaging</h5>
        </div>
      </div>
    </div>
  )
}
