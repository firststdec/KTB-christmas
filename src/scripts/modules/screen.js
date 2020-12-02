import $ from 'jquery'
import { isLocked } from '../_variables'

export default class Screen {
  constructor() {
    this.ele = document.querySelector('html')
  }

  // Lock screen
  lock() {
    const top = $(window).scrollTop()

    if (!$(this.ele).hasClass(isLocked)) {
      $(this.ele)
        .addClass(isLocked)
        .css({ top: (top * -1) })
        .data('top', top)
    }
  }

  // Unlock screen
  unlock() {
    const top = $(this.ele).data('top') || 0

    if ($(this.ele).hasClass(isLocked)) {
      $(this.ele)
        .removeClass(isLocked)
        .css({ top: '' })
      $(window).scrollTop(top)
    }
  }

  // Check device
  get isPC() {
    const mq = window.matchMedia('screen and (min-width: 897px)')
    return mq.matches
  }

  // Check screen size
  size() {
    const mq = window.matchMedia('screen and (min-width: 897px)')
    $(mq).on('change', () => {
      $(window).trigger('breakpointChange')
    })
  }
}
