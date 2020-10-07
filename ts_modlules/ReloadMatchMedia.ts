export default class ReloadMacthMedia {
  private mql = window.matchMedia('screen and (max-width: 767px)')

  constructor() {
    this.init()
  }

  private init() {
    this.mql.addEventListener('change', this.checkBreakPoint)
  }

  private checkBreakPoint = ()=> {
    if (this.mql.matches) {
      location.reload()
    } else {
      location.reload()
    }
  }
}
