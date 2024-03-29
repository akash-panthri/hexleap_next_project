import React from 'react'
import SpotlightCollectionElementContainer from './SpotlightCollectionElementContainer'

export default function SpotlightCollectionContainer() {
  return (
    <div className='bg-gradient-to-r from-f9f8ff to-f3f9ff dark:bg-[#19262a] py-[7.5%] xl:w-[1240px]' >
<div className="text-sch1 font-bold font-poppins text-center my-[1.5%]">

Collection Spotlight
</div>
<div className="text-sch2 font-inter font-normal text-center px-3 w-1/2 mx-[24%]  my-[1.5%]">

      Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!
</div>



        <SpotlightCollectionElementContainer />
    </div>
  )
}
