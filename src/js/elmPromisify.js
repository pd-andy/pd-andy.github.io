export default (Elm, { node, flags }) => {
  const app = Elm.init({ node, flags })

  return new Promise(resolve => {
    window.requestAnimationFrame(() => {
      resolve(app)
    })
  })
}
