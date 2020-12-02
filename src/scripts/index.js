import $ from 'jquery'
import Pagetop from './modules/pagetop'
import Top from './modules/top'
import AnchorLink from './modules/anchorLink'
import MatchHeight from './modules/match_height'
import Screen from './modules/screen'

/* ----------------------------------------------------------
  init
---------------------------------------------------------- */
const pagetop = new Pagetop({
  target: '.js-pagetop'
})

const anchorLink = new AnchorLink({
  target: '.js-anchor'
})

const matchHeight = new MatchHeight({
  target: '.js-matchHeight-group'
})

const top = new Top({
  target: '#top'
})

top.init()
pagetop.init()
anchorLink.init()
matchHeight.init()

/* ----------------------------------------------------------
  Screen
---------------------------------------------------------- */
const screen = new Screen()
$(window).on('resize', screen.size())
$(window).on('breakpointChange')
