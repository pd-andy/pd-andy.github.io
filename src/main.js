// CSS imports
import '@fortawesome/fontawesome-free/css/all.min.css'

// Image imports
import doApp from './img/do-app.png'
import flowArchitecture from './img/flow-architecture.png'

import { Elm } from './elm/Main.elm'
import mostInViewport from './js/mostInViewport'
import scrollIntoView from './js/scrollTo'

//
const app = Elm.Main.init({
  node: document.querySelector('#elm-container'),
  flags: {
    images: {
      do: doApp,
      flow: flowArchitecture
    }
  }
})

app.ports.scrollToElement
  .subscribe(scrollIntoView)

window.requestAnimationFrame(() => {
  document.querySelector('main')
    .addEventListener('scroll', mostInViewport(app))
})
