// eslint-disable-next-line import/extensions
import '@fortawesome/fontawesome-free/js/all.js'
import hero from './modules/hero'
import arrowDown from './modules/arrowDown'
import predict from './modules/predict'
import footerNav from './modules/footerNav'

const app = () => {
  hero()
  arrowDown()
  predict()
  footerNav()
}

app()
