import React from 'react'
import OneTeamSpecDetail from './OneTeamSpecDetail'
import { Detail } from '../../../utils/types'

export default function OneTeamSpecs({datumDetails}:{datumDetails:Detail[]}) {
  return (
    <div>
      <div className="flex flex-row p-[11px] mb-[15px] justify-between bg-[#F7F7F8] dark:bg-[#292B32]">

{datumDetails.map(datumDetail=>{
  return <OneTeamSpecDetail key={datumDetail.mark} datumDetail={datumDetail} />
})}

      </div>
    </div>
  )
}
