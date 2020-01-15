const github = require('gh-pages')

github.publish('dist', {
  add: false,
  branch: 'master',
  message: ':tada: Deploy site.'
}, err => err
  ? console.error(err)
  : console.log('Site deployed!')
)
