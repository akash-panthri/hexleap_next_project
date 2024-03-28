import Image from 'next/image'
import React from 'react'
import SCOEMid from './SCOEMid'
import SCOEFooter from './SCOEFooter'
import { Spotlight } from '../../../utils/types'

export default function SpotLightCollectionOneElement({spotlightDatum}:{spotlightDatum:Spotlight}) {
  return (
    <div className='w-[258px] h-[625px] p-[16px] bg-white dark:bg-[#3b3e47] relative mx-3 shadow-bx overflow-hidden after:absolute after:bottom-[26%] after:right-[-9px] after:w-[20px] after:h-[20px] after:rounded-full after:z-[1]
    after:content-[""] after:display-block after:shadow-bx-inner before:absolute before:bottom-[26%] before:left-[-9px] before:w-[20px] before:h-[20px] before:rounded-full before:z-[1] 
    before:content-[""] before:display-block before:shadow-bx-inner dark:after:bg-[#19262a] dark:before:bg-[#19262a]'>
      <div className="w-[226px] h-[598px]">

       <Image alt='' src={`/img/spotlight/image_${spotlightDatum.img_id}.jpeg`} height={1920} width={1080} />
       <div className="w-10/12 mt-[15.5%] mx-[7.5%] border-dashed h-[7.5%] py-[2.5%] border-[#818A97] border-t-[0.96px]  ">

       < SCOEMid ticketData={spotlightDatum.teamData} />
       <SCOEFooter CollectionName={spotlightDatum.collection_name} />
       </div>
      </div>
    </div>
  )
}
