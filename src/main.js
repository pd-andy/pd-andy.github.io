import { Elm } from './elm/Main.elm'
import mostInViewport from './js/mostInViewport'
import scrollIntoView from './js/scrollTo'

//
const app = Elm.Main.init({
  node: document.querySelector('body'),
  flags: {}
})

app.ports.scrollToElement
  .subscribe(scrollIntoView)

document.querySelector('main')
  .addEventListener('scroll', mostInViewport(app))
