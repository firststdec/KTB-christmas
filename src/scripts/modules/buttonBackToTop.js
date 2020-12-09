const buttonBackToTop = () => {
  const classShow = 'is-show'
  const btnBackToTopElm = document.getElementById('btnBackToTop')

  // Hide/Show button
  window.addEventListener('scroll', () => {
    const windowTop = window.scrollY

    if (windowTop > 800) {
      btnBackToTopElm.classList.add(classShow)
    } else {
      btnBackToTopElm.classList.remove(classShow)
    }
  })

  // click button
  btnBackToTopElm.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  })
}

export default buttonBackToTop
