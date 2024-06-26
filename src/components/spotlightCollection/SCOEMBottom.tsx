import { TeamData } from "../../../utils/types";

export default function SCOEMBottom({ticketData}:{ticketData:TeamData}) {
  return (
    <div>
      <div className="flex flex-row text-sm_1 font-medium justify-evenly text-center">
        <span className="px-1 text-center">{ticketData.date}</span>
        <span className="border-x-[0.53px] px-[10px] border-gray-600 text-center ">{ticketData.day}</span>
        <span className="px-1 text-center">{ticketData.time}</span>
      </div>
      <div className="w-[100%] text-sm_2 font-normal text-center">
       {ticketData.venue}
      </div>
    </div>
  );
}
