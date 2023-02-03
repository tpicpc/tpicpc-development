import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'events',
  title: 'events',
  type: 'document',
  fields: [
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      description: 'Enter a short description of the post',
      title: 'Description',
      type: 'string',
    }),

    defineField({
      name: 'time',
      title: 'Time',
      type: 'string',
    }),
    defineField({
      name: 'duration',
      title: 'Duration ',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Contest Link',
      type: 'string',
    }),
    defineField({
      name: 'eventStart',
      title: 'Event Start',
      type: 'datetime',
    }),
    defineField({
      name: 'eventEnd',
      title: 'Event End',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
