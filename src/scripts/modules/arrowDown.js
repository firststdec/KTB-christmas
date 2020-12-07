const arrowDown = () => {
  const btnDownElm = document.getElementById('btnDown')
  btnDownElm.addEventListener('click', () => {
    const sec2Elm = document.getElementById('secMarble')
    const targetTop = sec2Elm.offsetTop
    window.scrollTo({
      top: targetTop,
      behavior: 'smooth',
    })
  })
}

export default arrowDown
