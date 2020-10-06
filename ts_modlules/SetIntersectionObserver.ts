export default class SetIntersectionObserver {
  private _classWord: string
  private _rootMarginBottom: string // -100%で画面上部

  constructor(classWord, rootMarginBottom = '0%') {
    this._classWord = classWord
    this._rootMarginBottom = rootMarginBottom
    this.init()
  }

  private init() {
    const options = {
      root: null,
      rootMargin: `0% 0% ${this._rootMarginBottom} 0%`,
      threshold: 0,
    }
    const observer = new IntersectionObserver(this.callback, options)
    const observers = document.querySelectorAll(`.js-${this._classWord}`)
    observers.forEach((el) => {
      observer.observe(el)
    })
  }

  private callback(entries, observer) {
    entries.forEach((entry) => {
      const elem = entry.target
      if (entry.isIntersecting) {
        elem.classList.remove(`is-${this._classWord}`)
        observer.unobserve(entry.target) // 監視解除（発火は1度のみ）
      }
    })
  }
}
