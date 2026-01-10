import { defineField, defineType } from "sanity";
import { BiPhotoAlbum } from "react-icons/bi";

export default defineType({
  name: 'photo',
  title: 'Photo',
  type: 'document',
  icon: BiPhotoAlbum,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required()
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'text',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Lower numbers appear first'
    })
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare(selection: any) {
      const { title, media } = selection;
      return {
        title,
        media,
      };
    }
  }
})