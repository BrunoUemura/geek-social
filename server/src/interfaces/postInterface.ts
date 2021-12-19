export interface IPostCreate {
  userId: string;
  title: string;
  description: string;
  image?: string;
}

export interface IPostUpdate {
  title: string;
  description: string;
  image?: string;
}
