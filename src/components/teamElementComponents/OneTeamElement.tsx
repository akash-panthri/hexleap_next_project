import Image from 'next/image'
import React from 'react'
import OneTeamSpecs from './OneTeamSpecs'
import { Team } from '../../../utils/types'


export default function OneTeamElement({teamElementDatum}:{teamElementDatum:Team}) {
  return (
    <div className='p-[11px] my-[20px] xl:my-0 dark:bg-elem-dark bg-white content-between shadow-spc w-[238.53px] h-[511px] dark:text-[#3B3E47]'>
      <>
    <Image alt='' src={`/img/team/img_${teamElementDatum.imgNo}.png`} height={218.4} width={385.41} />
    <div className="text-tmhd font-medium font-inter my-[20px] dark:text-white">{teamElementDatum.team}</div>
    <OneTeamSpecs datumDetails={teamElementDatum.detail} />
      </>
    </div>
  )
}

