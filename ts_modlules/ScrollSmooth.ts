import $ from 'jquery'

const $a = $('a[href^="#"]')
const $header = $('.header')
const $htmlBody = $('body, html')

export default class ScrollSmooth {
  constructor() {
    this.bindEvent()
  }

  bindEvent() {
    $a.on('click', this.scroll)
  }

  scroll(e) {
    e.preventDefault();
    const adjust = $header.height() + 10;
    const speed = 400;
    const href= $(this).attr('href');
    const target = $(href == '#' || href == '' ? 'html' : href);
    const position = target.offset().top - adjust;
    $htmlBody.animate({scrollTop: position}, speed, 'swing');
  }
}
