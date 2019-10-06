import { Elm } from './elm/Main.elm'
import { promisify } from 'elm-promisify'
import mostInViewport from './js/mostInViewport'
import scrollIntoView from './js/scrollTo'

const node = document.querySelector('#elm-container')
const flags = {}

// elmPromisify resolves an elm app after the next animation frame, guaranteeing
// the elm app gets a chance to render at least once.
promisify(Elm.Main, { node, flags }).then(app => {
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
