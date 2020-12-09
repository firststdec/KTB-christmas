/* eslint-disable no-restricted-syntax */
const copyClipboard = () => {
  const classShow = 'is-show'
  const btnCopyClipboardElmArray = document.querySelectorAll('.btn-copy-clipboard')
  for (const button of btnCopyClipboardElmArray) {
    const tooltipElm = button.querySelector('.btn-copy-clipboard__tooltip')
    button.addEventListener('click', e => {
      e.preventDefault()
      const copyTextElm = button.previousElementSibling

      copyTextElm.select()
      copyTextElm.setSelectionRange(0, 99999)
      document.execCommand('copy')

      tooltipElm.classList.add(classShow)

      setTimeout(() => {
        tooltipElm.classList.remove(classShow)
      }, 700)
    })
  }
}

export default copyClipboard
