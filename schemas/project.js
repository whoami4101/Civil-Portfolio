export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Land Development Projects', value: 'land-development'},
          {title: 'Institutional Projects', value: 'institutional'},
          {title: 'Public Works Projects', value: 'public-works'},
          {title: 'Infrastructure Projects', value: 'infrastructure'},
          {title: 'Environmental Projects', value: 'environmental'},
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'images',
      title: 'Additional Images',
      type: 'array',
      of: [{type: 'image'}]
    },
    {
      name: 'client',
      title: 'Client',
      type: 'string'
    },
    {
      name: 'projectDate',
      title: 'Project Date',
      type: 'date'
    },
    {
      name: 'services',
      title: 'Services Provided',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          'Geotechnical Engineering',
          'Environmental Engineering',
          'Geology',
          'Inspection',
          'Instrumentation'
        ]
      }
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Completed', value: 'completed'},
          {title: 'In Progress', value: 'in-progress'},
          {title: 'Planned', value: 'planned'}
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0
    }
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      location: 'location',
      media: 'mainImage'
    },
    prepare(selection) {
      const {title, category, location, media} = selection
      return {
        title: title,
        subtitle: `${category} - ${location}`,
        media: media
      }
    }
  }
}
