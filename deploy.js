const github = require('gh-pages')

github.publish('dist', {
  branch: 'master',
  message: ':tada: Deploy site.'
}, err => err
  ? console.error(err)
  : console.log('Site deployed!')
)
