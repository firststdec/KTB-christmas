import $ from 'jquery'

export default class AnchorLink {
  constructor(props) {
    this.anchors = document.querySelectorAll(props.target)
  }

  init() {
    if (this.anchors) {
      const header = document.querySelector('.c-header')
      this.anchors.forEach(val => {
        val.addEventListener('click', e => {
          e.preventDefault()
          const self = e.currentTarget
          const href = self.getAttribute('href')
          const headerHeight = header.offsetHeight
          const posTarget = $(href).offset().top - headerHeight
          $('body, html').stop().animate({
            scrollTop: posTarget
          }, 400, 'swing')
        })
      })
    }
  }
}
