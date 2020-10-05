import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css'

let _objClass: string

export default class Carousel {
  constructor(objClass) {
    _objClass = objClass
    this.init()
  }

  init() {
    const swiper = new Swiper(_objClass, {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  }
}
