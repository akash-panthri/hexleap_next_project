import Image from 'next/image'
import React from 'react'

export default function AdElement() {
  return (
    <div className='p-[10px] dark:bg-elem-dark bg-white  mx-3 shadow-spc w-[238.53px] h-[511px]'>
      <div className="">

      <Image src="/img/asd.png" alt='' width={218} height={218} />
      </div>
      <div className="border-[0.2px] border-[#006555] p-[12px]">

      <div className=" font-inter text-adspc font-semibold text-[#222D3A] dark:text-white">
      Advertisement title
      </div>
      <div className="font-inter font-normal text-addes text-[#525965] dark:text-grayed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
      </div>
    </div>
  )
}
