import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css'

export default class Carousel {
  private _objClass: string

  constructor(objClass) {
    this._objClass = objClass
    this.init()
  }

  private init() {
    const swiper = new Swiper(this._objClass, {
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
