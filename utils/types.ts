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
