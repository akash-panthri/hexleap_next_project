export interface Team {
  id: number;
  imgNo: number;
  team: string;
  detail: Detail[];
}

export interface Detail {
  mark: string;
  head: string;
  sol: string;
}
export interface Spotlight{
    id: number;
  img_id: number;
  teamData: TeamData;
  collection_name:String;
}

export interface TeamData{
    team: string;
    date:String;
    day:String;
    time:String;
    venue:String;
}