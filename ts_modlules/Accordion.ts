import $ from 'jquery'

export default class Accordion {
  private $obj = $('.js-accordion > dt')

  constructor() {
    this.bindEvent()
  }

  private bindEvent() {
    this.$obj.on('click', this.toggle)
  }

  private toggle() {
    $(this).next().slideToggle()
  }
}
