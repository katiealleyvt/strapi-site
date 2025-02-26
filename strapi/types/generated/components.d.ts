import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksFeatures extends Struct.ComponentSchema {
  collectionName: 'components_blocks_features';
  info: {
    description: '';
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
    displayName: 'Hero';
  };
  attributes: {
    bgImage: Schema.Attribute.Media<'images' | 'files'>;
    buttons: Schema.Attribute.Component<'elements.button', true>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface ElementsButton extends Struct.ComponentSchema {
  collectionName: 'components_elements_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    color: Schema.Attribute.Enumeration<['primary', 'secondary', 'tertiary']>;
    isExternal: Schema.Attribute.Boolean;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ElementsCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    bgColor: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'tertiary', 'white', 'black']
    >;
    description: Schema.Attribute.Text;
    svg: Schema.Attribute.Enumeration<['medal', 'heart', 'shield']>;
    textColor: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'tertiary', 'white', 'black']
    >;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.features': BlocksFeatures;
      'blocks.hero': BlocksHero;
      'elements.button': ElementsButton;
      'elements.card': ElementsCard;
    }
  }
}
