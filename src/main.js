import { Elm } from './elm/Main.elm'
import elmPromisify from './js/elmPromisify'
import mostInViewport from './js/mostInViewport'
import scrollIntoView from './js/scrollTo'

const node = document.querySelector('#elm-container')
const flags = {}

elmPromisify(Elm.Main, { node, flags }).then(app => {
  // elm -> js ports
  app.ports.scrollToElement.subscribe(scrollIntoView)

  // js -> elm ports
  document.querySelector('main').addEventListener('scroll', e => {
    const focusedElement = mostInViewport(e)

    if (focusedElement) {
      app.ports.onFocusChange.send(focusedElement)
      window.history.pushState(null, null, `#${focusedElement}`)
    }
  })
})
