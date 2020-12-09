/* eslint-disable space-before-function-paren */
const facebookShare = () => {
  const btnShareFbElm = document.getElementById('buttonShareFacebook')
  btnShareFbElm.addEventListener('click', e => {
    e.preventDefault()
    // eslint-disable-next-line no-undef
    FB.ui(
      {
        app_id: '725918654987891',
        method: 'share',
        href: 'https://krungthaihny2021.com/',
        redirect_uri: 'https://krungthaihny2021.com/',
        hashtag: '#KTBHNY2021'
      },
      // callback
      function(response) {
        if (response && !response.error_message) {
          // eslint-disable-next-line no-alert
          console.log('Posting completed.')
        } else {
          // eslint-disable-next-line no-alert
          console.log('Error while posting.')
        }
      }
    )
  })
}

const snsShare = () => {
  facebookShare()
}

export default snsShare
