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

const setQrCode = target => {
  const pathImgQrCode = '/assets/image/modal/'
  const imgQrCodeElm = document.getElementById('imgQrCode')
  const buttonLoveParentElm = document.getElementById('buttonLove').parentNode
  const buttonBagParentElm = document.getElementById('buttonBag').parentNode
  const buttonHealthParentElm = document.getElementById('buttonHealth').parentNode

  if (target === 'qrWork') {
    imgQrCodeElm.setAttribute('src', `${pathImgQrCode}img_qrcode_1.png`)
    buttonLoveParentElm.style.display = 'flex'
    buttonBagParentElm.style.display = 'none'
    buttonHealthParentElm.style.display = 'flex'
  }

  if (target === 'qrLove') {
    imgQrCodeElm.setAttribute('src', `${pathImgQrCode}img_qrcode_2.png`)
    buttonLoveParentElm.style.display = 'none'
    buttonBagParentElm.style.display = 'flex'
    buttonHealthParentElm.style.display = 'flex'
  }

  if (target === 'qrHealth') {
    imgQrCodeElm.setAttribute('src', `${pathImgQrCode}img_qrcode_3.png`)
    buttonLoveParentElm.style.display = 'flex'
    buttonBagParentElm.style.display = 'flex'
    buttonHealthParentElm.style.display = 'none'
  }
}

const changeQrcode = () => {
  const buttonLoveElm = document.getElementById('buttonLove')
  buttonLoveElm.addEventListener('click', e => {
    e.preventDefault()
    setQrCode('qrLove')
  })

  const buttonBagElm = document.getElementById('buttonBag')
  buttonBagElm.addEventListener('click', e => {
    e.preventDefault()
    setQrCode('qrWork')
  })

  const buttonHealthElm = document.getElementById('buttonHealth')
  buttonHealthElm.addEventListener('click', e => {
    e.preventDefault()
    setQrCode('qrHealth')
  })
}

const openModalQrcode = () => {
  const modalElm = document.getElementById('modalQrcode')
  const buttonElm = document.getElementById('buttonOpenModalQrcode')

  buttonElm.addEventListener('click', e => {
    e.preventDefault()
    const predictIsShowElm = document.querySelector('.predict-list__item.is-show')
    const target = predictIsShowElm.dataset.qrTarget

    setQrCode(target)

    modalElm.classList.add(classShow)
  })
}

const predict = () => {
  openPredict()
  openModalQrcode()
  changeQrcode()
}

export default predict
