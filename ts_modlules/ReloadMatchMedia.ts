const mql = window.matchMedia('screen and (max-width: 767px)')

export default class ReloadMacthMedia {
  constructor() {
    this.init()
  }

  init() {
    mql.addListener(this.checkBreakPoint) // TODO: 動作はするがTSではaddListenerは非推奨
  }

  checkBreakPoint(mql) {
    if (mql.matches) {
      location.reload()
    } else {
      location.reload()
    }
  }
}
