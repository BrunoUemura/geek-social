export interface IListCreate {
  userId: string;
  listName: string;
  category: string;
}

export interface IListUpdate {
  listName?: string;
  category?: string;
}

export interface IListItemCreate {
  title: string;
  season: number;
  episode: number;
}

export interface IListItemUpdate {
  itemId: string;
  title?: string;
  season?: number;
  episode?: number;
}
