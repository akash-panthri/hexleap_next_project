import Image from 'next/image'
import React from 'react'
import OneTeamSpecs from './OneTeamSpecs'

interface Team {
  id: number;
  imgNo: number;
  team: string;
  detail: { mark: string; head: string; sol: string; }[];
}

export default function OneTeamElement({teamElementDatum}:{teamElementDatum:Team}) {
  return (
    <div className='p-[11px]  dark:bg-elem-dark bg-white content-between mx-3 shadow-spc w-[238.53px] h-[511px] dark:text-[#3B3E47]'>
      <>
    <Image alt='' src="/img/img1.png" height={218.4} width={385.41} />
    <div className="text-tmhd font-medium font-inter my-[20px] dark:text-white">Sacremento River Cat</div>
    <OneTeamSpecs />
      </>
    </div>
  )
}

