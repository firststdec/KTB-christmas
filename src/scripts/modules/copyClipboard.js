/* eslint-disable no-restricted-syntax */
const copyClipboard = () => {
  const classShow = 'is-show'
  const btnCopyClipboardElmArray = document.querySelectorAll('.btn-copy-clipboard')
  const inputClipboardElm = document.getElementById('inputClipboard')

  // for (const button of btnCopyClipboardElmArray) {
  //   const tooltipElm = button.querySelector('.btn-copy-clipboard__tooltip')
  //   button.addEventListener('click', e => {
  //     e.preventDefault()

  //     inputClipboardElm.select()
  //     inputClipboardElm.setSelectionRange(0, 99999)
  //     document.execCommand('copy')

      
  //   })
  // }
  const clipboard = new ClipboardJS('.btn-copy-clipboard')

  clipboard.on('success', function(e) {
    // console.info('Action:', e.action);
    // console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    const tooltipElm = e.trigger.querySelector('.btn-copy-clipboard__tooltip')

    tooltipElm.classList.add(classShow)

    setTimeout(() => {
      tooltipElm.classList.remove(classShow)
    }, 700)

    // console.log(e)

    e.clearSelection();
  });
  
}

export default copyClipboard
