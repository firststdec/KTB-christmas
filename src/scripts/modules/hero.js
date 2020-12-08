const fullHeight = () => {
  const limitHeight = 810
  const classFreemode = 'is-freemode'
  const windowHeight = window.innerHeight
  const heroElm = document.getElementById('hero')

  if (windowHeight >= limitHeight) {
    heroElm.classList.remove(classFreemode)
    heroElm.style.height = `${windowHeight}px`
  } else {
    heroElm.classList.add(classFreemode)
    heroElm.style.height = `${limitHeight}px`
  }

  document.getElementsByTagName('body')[0].style.visibility = 'visible'
}

const hero = () => {
  window.addEventListener('load', () => {
    fullHeight()
  })

  window.addEventListener('resize', () => {
    fullHeight()
  })
}

export default hero
