/* eslint-disable space-before-function-paren */
import { indexOfPredictRamdom } from './predict'

const facebookShare = () => {
  const btnShareFbElm = document.getElementById('bthFacebookShare')
  btnShareFbElm.addEventListener('click', e => {
    e.preventDefault()

    // eslint-disable-next-line no-undef
    const urlShare = encodeURIComponent(`https://krungthaihny2021.com/share_${indexOfPredictRamdom}.html`)
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${urlShare}&hashtag=%23KTBHNY2021`, 'fbShareWindow')
  })
}

const snsShare = () => {
  facebookShare()
}

export default snsShare
