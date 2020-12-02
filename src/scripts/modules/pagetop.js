import $ from 'jquery'

export default class Pagetop {
  constructor(props) {
    this.elm = document.querySelector(props.target)
  }

  init() {
    if (this.elm) {
      this.elm.addEventListener('click', event => {
        event.preventDefault()
        const SCROLL_SPEED = 400
        $('html, body').animate({
          scrollTop: 0
        }, SCROLL_SPEED)
      })
    }
  }
}
