import type { Schema, Struct } from '@strapi/strapi';

export interface SeoMetaTags extends Struct.ComponentSchema {
  collectionName: 'components_seo_meta_tags';
  info: {
    description: '';
    displayName: 'Meta_Tags';
  };
  attributes: {
    Meta_Description: Schema.Attribute.Text & Schema.Attribute.Required;
    Meta_Keywords: Schema.Attribute.String & Schema.Attribute.Required;
    Meta_Title: Schema.Attribute.String & Schema.Attribute.Required;
    OpenGraph_Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'seo.meta-tags': SeoMetaTags;
    }
  }
}
