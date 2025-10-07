import { ChevronLeft, ChevronRight, createIcons, Eye, Heart, Phone, Search } from 'lucide'
import { carousel } from './carousel'

createIcons({
  icons: {
    Phone,
    Search,
    Heart,
    ChevronRight,
    ChevronLeft,
    Eye
  }
})

window.addEventListener('load', () => {
  carousel()
  const quantity = document.getElementById('quantity')

  if (quantity) {
    const qty = quantity.querySelector('.qty')
    const increase = quantity.querySelector('.increase')
    const decrease = quantity.querySelector('.decrease')
    let selectedQuantity = 1

    increase.addEventListener('click', () => {
      selectedQuantity++
      qty.textContent = selectedQuantity
    })

    decrease.addEventListener('click', () => {
      if (selectedQuantity > 1) {
        selectedQuantity--
        qty.textContent = selectedQuantity

        increase.classList.toggle('disabled')
      }
    })
  }
})
