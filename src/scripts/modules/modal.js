const classShow = 'is-show'

const closeModalQrcode = () => {
  const htmlElm = document.getElementsByTagName('html')[0]
  document.getElementById('modalQrcode').classList.remove(classShow)
  htmlElm.classList.remove('is-locked')
  htmlElm.style.top = null
}

const handleCloseModal = () => {
  const buttonCloseElm = document.getElementById('buttonCloseModalQrcode')
  buttonCloseElm.addEventListener('click', () => {
    closeModalQrcode()

    const secMarbleElm = document.getElementById('secMarble')
    const secPredictElmTop = secMarbleElm.offsetTop + secMarbleElm.offsetHeight
    window.scrollTo({
      top: secPredictElmTop
    })
  })
}

const handleCompleteModal = () => {
  const secHappyNewYear = document.getElementById('secHappyNewYear')
  const buttonCompleteElm = document.getElementById('buttonComplete')

  buttonCompleteElm.addEventListener('click', e => {
    e.preventDefault()

    closeModalQrcode()

    const secHappyNewYearTop = secHappyNewYear.offsetTop
    window.scrollTo({
      top: secHappyNewYearTop
    })
  })
}

const modal = () => {
  handleCloseModal()
  handleCompleteModal()
}

export default modal
