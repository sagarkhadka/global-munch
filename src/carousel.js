import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

export const carousel = () => {
  const sliders = document.querySelectorAll('[data-presentation="carousel"]')
  if (!sliders.length) return

  sliders.forEach((slider) => {
    const slidesPerView = slider.dataset.slidesPerView
    const loop = slider.dataset.loop
    const spaceBetween = slider.dataset.spaceBetween
    const breakpoints = slider.dataset.breakpoints ? JSON.parse(slider.dataset.breakpoints) : null
    const nextBtnTarget = slider.dataset.nextBtnTarget
    const prevBtnTarget = slider.dataset.prevBtnTarget

    var slider = new Swiper(slider, {
      modules: [Navigation, Pagination],
      loop: loop === 'false' ? false : true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: nextBtnTarget,
        prevEl: prevBtnTarget
      },
      autoHeight: true,
      spaceBetween: spaceBetween ? spaceBetween : 0,
      breakpoints: breakpoints
        ? breakpoints
        : {
            768: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: slidesPerView ? slidesPerView : 1
            }
          }
    })
  })
}
