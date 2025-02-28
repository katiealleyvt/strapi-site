import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksFeatures extends Struct.ComponentSchema {
  collectionName: 'components_blocks_features';
  info: {
    displayName: 'Features';
  };
  attributes: {
    bgColor: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'tertiary', 'white', 'black']
    >;
    Cards: Schema.Attribute.Component<'elements.card', true>;
    header: Schema.Attribute.String;
    textColor: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'tertiary', 'white', 'black']
    >;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    description: '';
    displayName: 'Hero';
  };
  attributes: {
    bgImage: Schema.Attribute.Media<'images' | 'files'>;
    buttons: Schema.Attribute.Component<'elements.button', true>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface BlocksServices extends Struct.ComponentSchema {
  collectionName: 'components_blocks_services';
  info: {
    description: '';
    displayName: 'Services';
  };
  attributes: {
    bgColor: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'tertiary', 'white', 'black']
    >;
    header: Schema.Attribute.String;
    listStyle: Schema.Attribute.String;
    services: Schema.Attribute.Component<'elements.card', true>;
    textColor: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'tertiary', 'white', 'black']
    >;
  };
}

export interface ElementsButton extends Struct.ComponentSchema {
  collectionName: 'components_elements_buttons';
  info: {
    description: '';
    displayName: 'Button';
  };
  attributes: {
    color: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'tertiary', 'black', 'white']
    >;
    isExternal: Schema.Attribute.Boolean;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ElementsCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_cards';
  info: {
    description: '';
    displayName: 'Card';
  };
  attributes: {
    bgColor: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'tertiary', 'white', 'black']
    >;
    description: Schema.Attribute.RichText;
    svg: Schema.Attribute.Enumeration<['medal', 'heart', 'shield']>;
    textColor: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'tertiary', 'white', 'black']
    >;
    title: Schema.Attribute.String;
  };
}

export interface ElementsMarkdownList extends Struct.ComponentSchema {
  collectionName: 'components_elements_markdown_lists';
  info: {
    displayName: 'MarkdownList';
  };
  attributes: {
    listStyle: Schema.Attribute.String;
    MarkdownListItem: Schema.Attribute.Component<
      'elements.markdown-list-item',
      true
    >;
  };
}

export interface ElementsMarkdownListItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_markdown_list_items';
  info: {
    description: '';
    displayName: 'MarkdownListItem';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface ElementsService extends Struct.ComponentSchema {
  collectionName: 'components_elements_services';
  info: {
    description: '';
    displayName: 'Service';
  };
  attributes: {
    list: Schema.Attribute.Component<'elements.markdown-list-item', true>;
    listStyle: Schema.Attribute.String;
    svg: Schema.Attribute.Enumeration<['bath tub', 'calendar']>;
    textColor: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'tertiary', 'black', 'white']
    >;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.features': BlocksFeatures;
      'blocks.hero': BlocksHero;
      'blocks.services': BlocksServices;
      'elements.button': ElementsButton;
      'elements.card': ElementsCard;
      'elements.markdown-list': ElementsMarkdownList;
      'elements.markdown-list-item': ElementsMarkdownListItem;
      'elements.service': ElementsService;
    }
  }
}
