const randomPredict = () => {
  const classShow = 'is-show'
  const predictsArray = document.querySelectorAll('.predict-list__item')

  const itemActiveElm = predictsArray[Math.floor(Math.random() * predictsArray.length)]

  const prevItemActiveElm = document.querySelector('.predict-list__item.is-show')
  if (prevItemActiveElm) {
    prevItemActiveElm.classList.remove(classShow)
  }

  itemActiveElm.classList.add(classShow)
}

const openPredict = () => {
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

      randomPredict()
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

const predict = () => {
  openPredict()
}

export default predict
