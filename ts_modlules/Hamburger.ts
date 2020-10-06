export default class Hamburger {
  private body = document.querySelector('body')
  private header = document.querySelector('.js-header')
  private humburger = document.querySelector('.js-hamburger')
  private headerNav = document.querySelector('.js-headerNav')
  private winScrollTop: number

  constructor() {
    this.bindEvent()
  }

  private bindEvent() {
    this.humburger.addEventListener('click', this.toggle)
    this.headerNav.addEventListener('click', this.toggle)
  }

  private toggle = ()=> {
    if (!this.header.classList.contains('is-open')) {
      this.winScrollTop = window.scrollY
      this.header.classList.add('is-open')
      this.body.classList.add('is-fixed')
      this.body.style.top = `-${this.winScrollTop}px`
    } else {
      this.header.classList.remove('is-open')
      this.body.classList.remove('is-fixed')
      this.body.style.top = ''
      window.scrollTo(0, this.winScrollTop)
    }
  }

}
