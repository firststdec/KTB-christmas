/* eslint-disable space-before-function-paren */
const facebookShare = () => {
  const btnShareFbElm = document.getElementById('buttonShareFacebook')
  btnShareFbElm.addEventListener('click', e => {
    e.preventDefault()
    // eslint-disable-next-line no-undef
    FB.ui(
      {
        method: 'share',
        href: 'https://developers.facebook.com/docs/',
      },
      // callback
      function(response) {
        if (response && !response.error_message) {
          // eslint-disable-next-line no-alert
          alert('Posting completed.')
        } else {
          // eslint-disable-next-line no-alert
          alert('Error while posting.')
        }
      }
    )
  })
}

const snsShare = () => {
  facebookShare()
}

export default snsShare
