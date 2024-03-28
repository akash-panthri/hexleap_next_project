import React from 'react'
import SpotLightCollectionOneElement from './SpotLightCollectionOneElement'
import { CiSquareChevLeft , CiSquareChevRight } from "react-icons/ci";
import spotlightData from '../../../data/spotlightCollectionData.json'
export default function SpotlightCollectionElementContainer() {
  return (
    <div className='flex flex-row justify-evenly items-center' >

<CiSquareChevLeft className='text-5xl font-bold text-rockman-blue-300' />
<div className="flex flex-row justify-evenly items-center">
{spotlightData.map(spotlightDatum=>{
  return <SpotLightCollectionOneElement key={spotlightDatum.id} spotlightDatum={spotlightDatum} />
})}
      
</div>
        <CiSquareChevRight className='text-5xl font-bold text-rockman-blue-300' />
    </div>
  )
}
