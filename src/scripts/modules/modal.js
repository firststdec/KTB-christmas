const classShow = 'is-show'

const closeModalQrcode = () => {
  const buttonCloseElm = document.getElementById('buttonCloseModalQrcode')
  buttonCloseElm.addEventListener('click', () => {
    document.getElementById('modalQrcode').classList.remove(classShow)
  })
}

const completeQecode = () => {
  const secHappyNewYear = document.getElementById('secHappyNewYear')
  const buttonCompleteElm = document.getElementById('buttonComplete')

  buttonCompleteElm.addEventListener('click', e => {
    e.preventDefault()
    const secHappyNewYearTop = secHappyNewYear.offsetTop
    window.scrollTo({
      top: secHappyNewYearTop
    })
    document.getElementById('modalQrcode').classList.remove(classShow)
  })
}

const modal = () => {
  closeModalQrcode()
  completeQecode()
}

export default modal
