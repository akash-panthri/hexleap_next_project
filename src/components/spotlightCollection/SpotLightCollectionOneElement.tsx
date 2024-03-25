import Image from 'next/image'
import React from 'react'
import SCOEMid from './SCOEMid'
import SCOEFooter from './SCOEFooter'

export default function SpotLightCollectionOneElement() {
  return (
    <div className='w-[258px] h-[625px] px-[16px] bg-white sCElement relative mx-3 overflow-hidden '>
      <div className="w-[226px] h-[598px]">

       <Image alt='' src="/img1.png" height={868} width={480} />
       <div className="w-10/12 mt-[10.5%] mx-[7.5%] border-dashed h-[15.5%] py-[7.5%] border-t-4">

       < SCOEMid />
       <SCOEFooter />
       </div>
      </div>
    </div>
  )
}
