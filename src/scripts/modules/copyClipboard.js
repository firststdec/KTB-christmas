/* eslint-disable no-restricted-syntax */
const copyClipboard = () => {
  const classShow = 'is-show'
  const btnCopyClipboardElmArray = document.querySelectorAll('.btn-copy-clipboard')
  const inputClipboardElm = document.getElementById('inputClipboard')

  for (const button of btnCopyClipboardElmArray) {
    const tooltipElm = button.querySelector('.btn-copy-clipboard__tooltip')
    button.addEventListener('click', e => {
      e.preventDefault()

      inputClipboardElm.select()
      inputClipboardElm.setSelectionRange(0, 99999)
      document.execCommand('copy')

      tooltipElm.classList.add(classShow)

      setTimeout(() => {
        tooltipElm.classList.remove(classShow)
      }, 700)
    })
  }
}

export default copyClipboard
