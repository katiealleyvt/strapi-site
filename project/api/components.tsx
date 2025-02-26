import { Color } from '../api/types'

export interface PageButton {
  color: Color;
  isExternal: boolean;
  text: string;
  url: string;
};

export interface PageImage {
  id: number;
  name: string;
  url: string;
  height: number,
  width: number
};
export interface Hero {
  id: number;
  bgImage: PageImage;
  description: string;
  heading: string;
  buttons: PageButton[];
};

export interface HomePage extends DataItem {
    hero: Hero[];
}
  export interface DataItem {
    createdAt: string;
    documentId: string;
    hero: Hero[];
    id: number;
    publishedAt: string;
    updatedAt: string;
}
  
export interface Meta {
    pagination: {
      // Define the properties of the pagination object here
      // For example, if pagination has 'page' and 'total' properties:
      page: number;
      total: number;
    };
}
  
export interface DataResponse {
    data: DataItem[];
    meta: Meta;
}