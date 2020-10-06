import Polyfill from './ts_modlules/Polyfill'
import ReloadMatchMedia from './ts_modlules/ReloadMatchMedia'
import Humburger from './ts_modlules/Hamburger'
import ScrollSmooth from './ts_modlules/ScrollSmooth'
import Carousel from './ts_modlules/Carousel'
import SetIntersectionObserver from './ts_modlules/SetIntersectionObserver'
import Accordion from './ts_modlules/Accordion'
import Modal from './ts_modlules/Modal'

document.addEventListener('DOMContentLoaded', () => {
  const mql = window.matchMedia('screen and (max-width: 767px)')

  const init = ()=> {
    initCommon()
    initSP()
    initTBBC()
  }

  // SP,TB,PC共通の初期化
  const initCommon = ()=> {
    const polyfill = new Polyfill()
    const reloadMatchMedia = new ReloadMatchMedia()
    const scrollSmooth = new ScrollSmooth()
    const kvCarousel = new Carousel('.js-slide01')
    const scrollAnimeText = new SetIntersectionObserver('iso01', '-20%')
    const accordion = new Accordion()
    const modal = new Modal()
  }

  // SPのみ初期化
  const initSP = ()=> {
    if (mql.matches) {
      const humburger = new Humburger()
    }
  }

  // TB,PCのみ初期化
  const initTBBC= ()=> {
    if (!mql.matches) {

    }
  }

  init()
})
