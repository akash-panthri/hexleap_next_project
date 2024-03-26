import React from 'react'
import SpotLightCollectionOneElement from './SpotLightCollectionOneElement'
import { CiSquareChevLeft , CiSquareChevRight } from "react-icons/ci";

export default function SpotlightCollectionElementContainer() {
  return (
    <div className='flex flex-row justify-evenly items-center' >

<CiSquareChevLeft className='text-5xl font-bold text-rockman-blue-300' />
<div className="flex flex-row justify-evenly items-center">

        <SpotLightCollectionOneElement />
        <SpotLightCollectionOneElement />
        <SpotLightCollectionOneElement />
</div>
        <CiSquareChevRight className='text-5xl font-bold text-rockman-blue-300' />
    </div>
  )
}
