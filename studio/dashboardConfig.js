export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5e452ba4a96a27459bfff6ff',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-qu3iqpip',
                  apiId: 'c52b3edc-679f-4b3e-938e-cd46deb486e6'
                },
                {
                  buildHookId: '5e452ba45610d84e38dd7cfe',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-6nud89qi',
                  apiId: '96475057-25a9-4ba6-b708-6270a4c430c2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lasotaagency/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-6nud89qi.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
