export default id => {
  document.querySelector(`#${id}`).scrollIntoView({
    behavior: 'smooth'
  })
}
