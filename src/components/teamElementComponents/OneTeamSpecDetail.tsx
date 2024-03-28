import { Detail } from "../../../utils/types"

export default function OneTeamSpecDetail({datumDetail}:{datumDetail:Detail}) {
  return (
    <div className="">

    <div className="text-[#525965] font-normal text-tmtc dark:text-grayed">{datumDetail.head}</div>
    <div className="text-black font-medium text-tmdl dark:text-white">{datumDetail.sol}</div>
    
    </div>
  )
}
