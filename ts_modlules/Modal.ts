const body = document.querySelector('body')
const modal = document.querySelector('.js-modal')
const openModal = document.querySelector('.js-openModal')
const modalBg = document.querySelector('.js-modalBg')
const closeBtn = document.querySelector('.js-closeBtn')
let winScrollTop: number

export default class Modal {
  constructor() {
    this.bindEvent()
  }

  bindEvent() {
    openModal.addEventListener('click', this.openModal)
    modalBg.addEventListener('click', this.closeModal)
    closeBtn.addEventListener('click', this.closeModal)
  }

  openModal() {
    winScrollTop = window.scrollY
    modal.classList.add('is-open')
    body.classList.add('is-fixed')
    body.style.top = `-${winScrollTop}px`
  }

  closeModal() {
    modal.classList.remove('is-open')
    body.classList.remove('is-fixed')
    body.style.top = ''
    window.scrollTo(0, winScrollTop)
  }
}
