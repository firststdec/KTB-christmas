const predict = () => {
  const classShow = 'is-show'
  const marbleElm = document.getElementById('marble')
  const secMarbleElm = document.getElementById('secMarble')
  const secPredictElm = document.getElementById('secPredict')
  marbleElm.addEventListener('click', () => {
    if (!secPredictElm.classList.contains(classShow)) {
      secPredictElm.classList.add(classShow)

      const secPredictElmTop = secMarbleElm.offsetTop + secMarbleElm.offsetHeight
      window.scrollTo({
        top: secPredictElmTop,
        behavior: 'smooth',
      })
    } else {
      secPredictElm.classList.remove(classShow)

      const secMarbleElmTop = secMarbleElm.offsetTop
      window.scrollTo({
        top: secMarbleElmTop,
        behavior: 'smooth',
      })
    }
  })
}

export default predict
