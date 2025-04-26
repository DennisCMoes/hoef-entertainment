// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core'

export default config({
  storage: {
    kind: 'github',
    repo: 'DennisCMoes/hoef-entertainment',
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        draft: fields.checkbox({
          label: 'Draft',
          description:
            'Set this post as draft to prevent it from being published',
        }),
        date: fields.date({
          label: 'Event date',
          description: 'The date of the event',
        }),
        coverImage: fields.image({
          label: 'Cover Image',
          directory: 'public/files/coverImages',
          publicPath: '/files/coverImages',
        }),
        gallery: fields.array(
          fields.file({
            label: 'Content',
            description: 'One of the images or videos to describe your project',
            directory: 'public/files/resumes',
            publicPath: '/files/resumes',
          }),
          { label: 'Gallery' }
        ),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
    services: collection({
      label: 'Services',
      slugField: 'title',
      path: 'src/content/services/*',
      format: {},
      schema: {
        title: fields.slug({
          name: { label: 'Title', validation: { isRequired: true } },
        }),
        icon: fields.text({
          label: 'Icon',
          description: 'The Lucide React icon name',
          validation: { isRequired: true },
        }),
        description: fields.text({
          label: 'Description',
          multiline: true,
          validation: { isRequired: true },
        }),
        order: fields.integer({
          label: 'Order of appearance',
          description: 'Lower numbers appear first',
          validation: { isRequired: true, min: 1 },
        }),
      },
    }),
    showcase: collection({
      label: 'Showcase',
      slugField: 'title',
      path: 'src/content/showcase/*',
      schema: {
        title: fields.slug({
          name: { label: 'Title', validation: { isRequired: true } },
        }),
        image: fields.image({
          label: 'Gallery image',
          directory: 'public/files/gallery',
          publicPath: '/files/gallery',
        }),
      },
    }),
  },
})
