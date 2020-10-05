let _classWord: string
let _rootMarginBottom: string // -100%で画面上部

export default class SetIntersectionObserver {
  constructor(classWord, rootMarginBottom = '0%') {
    _classWord = classWord
    _rootMarginBottom = rootMarginBottom
    this.init()
  }

  init() {
    const options = {
      root: null,
      rootMargin: `0% 0% ${_rootMarginBottom} 0%`,
      threshold: 0,
    }
    const observer = new IntersectionObserver(this.callback, options)
    const observers = document.querySelectorAll(`.js-${_classWord}`)
    observers.forEach((el) => {
      observer.observe(el)
    })
  }

  callback(entries, observer) {
    entries.forEach((entry) => {
      const elem = entry.target
      if (entry.isIntersecting) {
        elem.classList.remove(`is-${_classWord}`)
        observer.unobserve(entry.target) // 監視解除（発火は1度のみ）
      }
    })
  }
}
