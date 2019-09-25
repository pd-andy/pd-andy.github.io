import { Elm } from './elm/Main.elm'

const app = Elm.Main.init({
  node: document.querySelector('body'),
  flags: {}
})
