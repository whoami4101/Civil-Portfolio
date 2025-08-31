export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      name: 'mission',
      title: 'Mission Statement',
      type: 'text',
      rows: 3
    },
    {
      name: 'vision',
      title: 'Vision Statement',
      type: 'text',
      rows: 3
    },
    {
      name: 'values',
      title: 'Core Values',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'teamMembers',
      title: 'Team Members',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'name',
            title: 'Name',
            type: 'string'
          },
          {
            name: 'position',
            title: 'Position',
            type: 'string'
          },
          {
            name: 'photo',
            title: 'Photo',
            type: 'image'
          },
          {
            name: 'bio',
            title: 'Bio',
            type: 'text',
            rows: 3
          }
        ]
      }]
    },
    {
      name: 'stats',
      title: 'Company Statistics',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'label',
            title: 'Label',
            type: 'string'
          },
          {
            name: 'value',
            title: 'Value',
            type: 'string'
          }
        ]
      }]
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
