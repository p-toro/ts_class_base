import $ from 'jquery'

const $obj = $('.js-accordion > dt')

export default class Accordion {
  constructor() {
    this.bindEvent()
  }

  bindEvent() {
    $obj.on('click', this.toggle)
  }

  toggle() {
    $(this).next().slideToggle()
  }
}
