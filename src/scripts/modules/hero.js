const fullHeight = () => {
  const limitHeight = 810
  const classFreemode = 'is-freemode'
  const windowHeight = window.innerHeight
  const heroElm = document.getElementById('hero')

  // if (window.matchMedia(`(min-width: ${breakpointSP + 1}px)`).matches) { // PC Scope
  // } else {

  // }

  //if ()
  if (windowHeight >= limitHeight) {
    heroElm.classList.remove(classFreemode)
    heroElm.style.height = `${windowHeight}px`
  } else {
    heroElm.classList.add(classFreemode)
    heroElm.style.height = `${limitHeight}px`
  }
}

const hero = () => {
  window.addEventListener('load', () => {
    fullHeight()
  })

  window.addEventListener('resize', () => {
    fullHeight()
  })
}

// const checkIsMobile = () => {
//   if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//     return true
//   // eslint-disable-next-line no-else-return
//   } else {
//     return false
//   }
// }

export default hero
