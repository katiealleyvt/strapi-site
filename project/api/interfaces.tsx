import { Color, Icon, Orientation } from './types'


export interface PageButton {
  color: Color;
  isExternal: boolean;
  text: string;
  url: string;
  textColor: Color;
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

export interface Services extends Block {
  id: number;
  header: string,
  bgColor: Color,
  textColor: Color,
  services: Card[]
};
export interface Contact extends Block {
  id: number;
  header: string,
  bgColor: Color,
  textColor: Color,
  buttonText: string,
  buttonColor: Color,
  buttonTextColor: Color,
  buttonLink: string
};
export interface Article extends Block {
  id: number;
  header: string,
  bgColor: Color,
  headerColor: Color,
  textColor: Color,
  buttonText: string,
  buttonColor: Color,
  buttonTextColor: Color,
  buttonLink: string,
  image: PageImage,
  description: string
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
export interface Header {
  id: number;
  logo: PageImage;
  bgColor: Color;
  navigation: Navigation;
};
export interface NavPage {
  id: number;
  title: string;
  url: string;
  innerPages: NavPage[]
};
export interface Navigation {
  id: number;
  menuItems: NavPage[]
  orientation: Orientation;
  textColor: Color
};
export interface MarkdownListItem {
  id: number;
  text: string;
};
export interface HomePage extends DataItem {
    blocks: Block[];
    header: Header;
}
  export interface DataItem {
    createdAt: string;
    documentId: string;
    id: number;
    publishedAt: string;
    updatedAt: string;
}
  