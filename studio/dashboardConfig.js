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
                  buildHookId: '6066ec0d311a0e55f73b9114',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-imcn8ppg',
                  apiId: '9d568f64-01ee-4ee9-876f-c1925ffdd430'
                },
                {
                  buildHookId: '6066ec0d311a0e5b923b90df',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-tj6ag5n7',
                  apiId: '667da5ae-4bdc-45e5-ba01-c3db97fe0943'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chrisfior/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-tj6ag5n7.netlify.app', category: 'apps'}
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
