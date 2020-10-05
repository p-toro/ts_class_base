const body = document.querySelector('body')
const header = document.querySelector('.js-header')
const humburger = document.querySelector('.js-hamburger')
const headerNav = document.querySelector('.js-headerNav')
let winScrollTop: number

export default class Hamburger {
  constructor() {
    this.bindEvent()
  }

  bindEvent() {
    humburger.addEventListener('click', this.toggle)
    headerNav.addEventListener('click', this.toggle)
  }

  toggle() {
    if (!header.classList.contains('is-open')) {
      winScrollTop = window.scrollY
      header.classList.add('is-open')
      body.classList.add('is-fixed')
      body.style.top = `-${winScrollTop}px`
    } else {
      header.classList.remove('is-open')
      body.classList.remove('is-fixed')
      body.style.top = ''
      window.scrollTo(0, winScrollTop)
    }
  }

}
