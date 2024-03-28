import React from "react";
import OneTeamElement from "./OneTeamElement";
import AdElement from "./AdElement";
import teamElementData from '../../../data/teamElementData.json'

export default function TeamElementContainer() {
  return (
    <div className="w-[100%] bg-[#f7f7f8] dark:bg-[#080807]">
    <div className="mx-[2.5vw] my-[1vh] w-[93vw] flex flex-col py-[2.5%] px-[15%]">
     
        <div className="border-b-2 border-blue-600 w-max mx-[calc(3rem_-_11px)] py-3 mb-7 text-3xl font-extrabold">
          Sports
        </div>
     
      <div className="flex flex-row mb-11 rounded-[3px]">
        {teamElementData.map(teamElementDatum =>{

       return <OneTeamElement key={teamElementDatum.id} teamElementDatum={teamElementDatum} />
        })}
      
        <AdElement />
      </div>
      <button className="bg-[#2C9CF0] text-white py-[10px] px-[30px] self-center gap-[5px]">
        See More
      </button>
    </div>
    </div>
  );
}
