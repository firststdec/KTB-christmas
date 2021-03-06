// eslint-disable-next-line import/extensions
import '@fortawesome/fontawesome-free/js/all.js'
import hero from './modules/hero'
import arrowDown from './modules/arrowDown'
import predict from './modules/predict'
import modal from './modules/modal'
import buttonBackToTop from './modules/buttonBackToTop'
import copyClipboard from './modules/copyClipboard'
import snsShare from './modules/snsShare'

const app = () => {
  hero()
  arrowDown()
  predict()
  modal()
  buttonBackToTop()
  copyClipboard()
  snsShare()
}

app()
