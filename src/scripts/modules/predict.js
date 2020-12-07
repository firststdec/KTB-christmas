const classShow = 'is-show'

const randomPredict = () => {
  const predictsArray = document.querySelectorAll('.predict-list__item')

  const itemActiveElm = predictsArray[Math.floor(Math.random() * predictsArray.length)]

  const prevItemActiveElm = document.querySelector('.predict-list__item.is-show')
  if (prevItemActiveElm) {
    prevItemActiveElm.classList.remove(classShow)
  }

  itemActiveElm.classList.add(classShow)
}

const openPredict = () => {
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

const openModalQrcode = () => {
  const modalElm = document.getElementById('modalQrcode')
  const buttonElm = document.getElementById('buttonOpenModalQrcode')
  buttonElm.addEventListener('click', e => {
    e.preventDefault()
    const predictIsShowElm = document.querySelector('.predict-list__item.is-show')
    const target = predictIsShowElm.dataset.qrTarget
    document.getElementById(target).classList.add(classShow)
    modalElm.classList.add(classShow)
  })
}

const closeModalQrcode = () => {
  const buttonCloseElm = document.getElementById('buttonCloseModalQrcode')
  buttonCloseElm.addEventListener('click', () => {
    document.getElementById('modalQrcode').classList.remove(classShow)
  })
}

const predict = () => {
  openPredict()
  openModalQrcode()
  closeModalQrcode()
}

export default predict
