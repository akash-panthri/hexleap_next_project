import React from "react";
import OneTeamElement from "./OneTeamElement";
import AdElement from "./AdElement";
import teamElementData from '../../../data/teamElementData.json'

export default function TeamElementContainer() {
  return (
    <div className="mx-[5%] md:mx-[10%] xl:w-[1240px] bg-[#f7f7f8] dark:bg-[#292b32] xl:mx-0 my-[1vh] flex flex-col py-[2.5%]">

     
        <div className="mb-7 w-full flex justify-center lg:justify-start">
          <span className="border-b-2 border-blue-600 w-max py-3  text-3xl font-extrabold">

          Sports
          </span>
        </div>
     
      <div className="flex flex-row justify-center sm:justify-evenly lg:justify-between flex-wrap mb-11 rounded-[3px]">
        {teamElementData.map(teamElementDatum =>{

       return <OneTeamElement key={teamElementDatum.id} teamElementDatum={teamElementDatum} />
        })}
      
        <AdElement />
      </div>
      <button className="bg-[#2C9CF0] text-white py-[10px] px-[30px] self-center gap-[5px]">
        See More
      </button>
    </div>
  );
}
