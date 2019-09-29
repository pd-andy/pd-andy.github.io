// CSS imports
import '@fortawesome/fontawesome-free/css/all.css'

// Image imports
import doApp from './img/do-app.png'
import flowArchitecture from './img/flow-architecture.png'

import { Elm } from './elm/Main.elm'
import mostInViewport from './js/mostInViewport'
import scrollIntoView from './js/scrollTo'

//
const app = Elm.Main.init({
  node: document.querySelector('body'),
  flags: {
    images: {
      do: doApp,
      flow: flowArchitecture
    }
  }
})

app.ports.scrollToElement
  .subscribe(scrollIntoView)

document.querySelector('main')
  .addEventListener('scroll', mostInViewport(app))
