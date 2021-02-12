export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6026fbc3082ae3014e0a5d71',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-iayvtskw',
                  apiId: '7c96de34-e62f-4d1a-92d4-197c73e95185'
                },
                {
                  buildHookId: '6026fbc32150fc011572283b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-m2ro4dyk',
                  apiId: '386cb779-58e8-43d8-aae4-9a32971163fb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vivianevieira/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-m2ro4dyk.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
