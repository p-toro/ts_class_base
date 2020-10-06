export default class Modal {
  private body = document.querySelector('body')
  private modal = document.querySelector('.js-modal')
  private jsOpenModal = document.querySelector('.js-openModal')
  private modalBg = document.querySelector('.js-modalBg')
  private closeBtn = document.querySelector('.js-closeBtn')
  private winScrollTop: number

  constructor() {
    this.bindEvent()
  }

  private bindEvent() {
    this.jsOpenModal.addEventListener('click', this.openModal)
    this.modalBg.addEventListener('click', this.closeModal)
    this.closeBtn.addEventListener('click', this.closeModal)
  }

  private openModal = ()=> {
    this.winScrollTop = window.scrollY
    this.modal.classList.add('is-open')
    this.body.classList.add('is-fixed')
    this.body.style.top = `-${this.winScrollTop}px`
  }

  private closeModal = ()=> {
    this.modal.classList.remove('is-open')
    this.body.classList.remove('is-fixed')
    this.body.style.top = ''
    window.scrollTo(0, this.winScrollTop)
  }
}
