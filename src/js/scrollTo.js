export default id => {
  document.querySelector(`#${id}`).scrollIntoView({
    behavior: 'smooth'
  })
  window.history.pushState(null, null, `#${id}`)
}
