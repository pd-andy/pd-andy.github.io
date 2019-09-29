const github = require('gh-pages')

github.publish('dist', {
  branch: 'master',
  message: ':tada: Deploy site.'
}, console.log)
