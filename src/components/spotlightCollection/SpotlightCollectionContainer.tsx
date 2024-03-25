import React from 'react'
import SpotlightCollectionElementContainer from './SpotlightCollectionElementContainer'

export default function SpotlightCollectionContainer() {
  return (
    <div className='bg-[#f4f9ff]  py-[7.5%]' >
<div className="text-5xl font-bold font-poppins text-center my-[1.5%]">

Collection Spotlight
</div>
<div className="text-base font-inter font-normal text-center px-3 w-1/2 mx-[24%]  my-[1.5%]">

      Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!
</div>



        <SpotlightCollectionElementContainer />
    </div>
  )
}