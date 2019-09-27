// We keep track of the last focused section so that we only send updates to
// the elm app when things change. This prevents us from blasting elm with
// data every time we scroll.
let lastFocusedSection = ''

export default app => e => {
  // Get all of this element's children and work out which ones are currently
  // visible in the viewport.
  const sections = Array.from(e.target.children)
    // Map each element to an object with only the useful information in it.
    .map(section => {
      const bounding = section.getBoundingClientRect()

      return {
        y: Math.abs(bounding.y),
        id: section.id,
        inViewport: bounding.y < window.innerHeight && bounding.y > -window.innerHeight
      }
    })
    // Filter out all the elements that aren't currently visible in the viewport.
    .filter(section => section.inViewport)
    // Sort the array so that the most prominent section is the first item in
    // the array.
    .sort((a, b) => a.y - b.y)
  //
  const focusedSection = sections.shift()

  if (focusedSection.id !== lastFocusedSection) {
    app.ports.onFocusChange.send(focusedSection.id)
  }

  lastFocusedSection = focusedSection.id
}
