import $ from 'jquery'

export default class ScrollSmooth {
  private $a = $('a[href^="#"]')
  private $htmlBody = $('body, html')

  constructor() {
    this.bindEvent()
  }

  private bindEvent() {
    this.$a.on('click', this.scroll.bind(this))
  }

  private scroll = (e) => {
    e.preventDefault()
    const adjust = $('.header').outerHeight() + 10 // headerの高さは都度取得
    const speed = 400
    const href = e.target.getAttribute('href')
    const target = $(href == '#' || href == '' ? 'html' : href)
    const position = target.offset().top - adjust
    this.$htmlBody.animate({ scrollTop: position }, speed, 'swing')
  }
}
