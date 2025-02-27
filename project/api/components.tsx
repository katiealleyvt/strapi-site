import { Color, Icon } from '../api/types'

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
export interface Features extends Block {
  id: number;
  header: string,
  bgColor: Color,
  textColor: Color,
  Cards: Card[]
};
export interface Hero extends Block {
  id: number;
  bgImage: PageImage;
  description: string;
  heading: string;
  buttons: PageButton[];
};
export interface Block {
  id: number;
};
export interface Card {
  id: number;
  bgColor: Color;
  textColor: Color;
  title: string;
  description: string;
  svg: Icon
};
export interface HomePage extends DataItem {
    blocks: Block[];
}
  export interface DataItem {
    createdAt: string;
    documentId: string;
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