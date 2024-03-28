
import SCOEMBottom from "./SCOEMBottom";
import { TeamData } from "../../../utils/types";

export default function SCOEMid({ticketData}:{ticketData:TeamData}) {
  return (
    <div>
      <div className="text-lg_xl font-medium font-poppins">{ticketData.team}</div>
      <SCOEMBottom ticketData={ticketData} />
    </div>
  );
}
