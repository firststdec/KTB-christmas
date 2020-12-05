const itemElmArray = document.querySelectorAll('.footer-nav__heading')
const classActive = 'is-active'

const footerAccordion = () => {
  // eslint-disable-next-line no-restricted-syntax
  for (const item of itemElmArray) {
    item.addEventListener('click', () => {
      item.classList.toggle(classActive)
      const panel = item.nextElementSibling
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null
      } else {
        panel.style.maxHeight = `${panel.scrollHeight}px`
      }
    })
  }
}

const footerReset = () => {
  const breakpointSP = 896
  window.addEventListener('resize', () => {
    if (window.matchMedia(`(min-width: ${breakpointSP + 1}px)`).matches) { // PC Scope
      // eslint-disable-next-line no-restricted-syntax
      for (const item of itemElmArray) {
        item.classList.remove(classActive)
        item.nextElementSibling.removeAttribute('style')
      }
    }
  })
}

const footerNav = () => {
  footerAccordion()
  footerReset()
}

export default footerNav
