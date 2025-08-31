export default {
  name: 'contact',
  title: 'Contact',
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
      type: 'text',
      rows: 3
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.email()
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 3
    },
    {
      name: 'offices',
      title: 'Office Locations',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'name',
            title: 'Office Name',
            type: 'string'
          },
          {
            name: 'address',
            title: 'Address',
            type: 'text',
            rows: 2
          },
          {
            name: 'phone',
            title: 'Phone',
            type: 'string'
          },
          {
            name: 'email',
            title: 'Email',
            type: 'string'
          }
        ]
      }]
    },
    {
      name: 'socialMedia',
      title: 'Social Media',
      type: 'object',
      fields: [
        {
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url'
        },
        {
          name: 'twitter',
          title: 'Twitter',
          type: 'url'
        },
        {
          name: 'facebook',
          title: 'Facebook',
          type: 'url'
        }
      ]
    },
    {
      name: 'businessHours',
      title: 'Business Hours',
      type: 'text',
      rows: 2
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
