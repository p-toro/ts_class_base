export default class ReloadMacthMedia {
  private mql = window.matchMedia('screen and (max-width: 767px)')

  constructor() {
    this.init()
  }

  private init() {
    this.mql.addListener(this.checkBreakPoint) // TODO: 動作はするがTSではaddListenerは非推奨
  }

  private checkBreakPoint = ()=> {
    if (this.mql.matches) {
      location.reload()
    } else {
      location.reload()
    }
  }
}
