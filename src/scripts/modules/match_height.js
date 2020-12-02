import $ from 'jquery'
import 'jquery-match-height'

export default class MatchHeight {
  constructor(props) {
    this.ele = document.querySelector(props.target)
  }

  init() {
    if (this.ele) {
      $('.js-matchHeight-group').each((idx, ele) => {
        const $this = $(ele)

        $this.find('.js-matchHeight-target').matchHeight()

        if ($this.find('.js-matchHeight-target-two').length) {
          $this.find('.js-matchHeight-target-two').matchHeight()
        }

        if ($this.find('.js-matchHeight-target-three').length) {
          $this.find('.js-matchHeight-target-three').matchHeight()
        }
      })
    }
  }
}
