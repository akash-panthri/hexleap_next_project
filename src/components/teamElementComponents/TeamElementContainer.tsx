import React from "react";
import OneTeamElement from "./OneTeamElement";

export default function TeamElementContainer() {
  return (
    <div className="mx-[2.5vw] my-[1vh] bg-[#f7f7f8] w-[93vw] flex flex-col">
     
      <div className="">
        <div className="border-b-2 border-blue-600 w-max mx-14 py-3 mb-7 text-3xl font-extrabold">Sports</div>
      </div>
      <div className="flex flex-row mb-11 rounded-[3px]">

      <OneTeamElement />
      <OneTeamElement />
      <OneTeamElement />
      <OneTeamElement />
      </div>
      <button className="bg-[#2C9CF0] text-white py-[10px] px-[30px] self-center gap-[5px]">See More</button>
    </div>
  );
}