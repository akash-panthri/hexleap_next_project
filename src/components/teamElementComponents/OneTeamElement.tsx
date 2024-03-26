import Image from 'next/image'
import React from 'react'
import OneTeamSpecs from './OneTeamSpecs'

export default function OneTeamElement() {
  return (
    <div className='p-11 dark:bg-elem-dark bg-white  mx-3 shadow-spc'>
      <>
    <Image alt='' src="/img/img1.png" height={868} width={480} />
    <div className="text-xl font-bold">Sacremento River Cat</div>
    <OneTeamSpecs />
      </>
    </div>
  )
}

