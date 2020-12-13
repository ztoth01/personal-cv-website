export const showMobileNav = () => {
  const overlay = $('.overlay')
  const mobileNav = $('.mobile-navigation')
  const hamburger = $('#hamburger')
  overlay.classList.remove('fade-out')
  overlay.classList.add('fade-in')
  mobileNav.classList.remove('slide-out')
  mobileNav.classList.add('slide-in')
  hamburger.classList.add('open')
}

export const hideMobileNav = () => {
  const overlay = $('.overlay')
  const mobileNav = $('.mobile-navigation')
  const hamburger = $('#hamburger')
  overlay.classList.remove('fade-in')
  overlay.classList.add('fade-out')
  mobileNav.classList.remove('slide-in')
  mobileNav.classList.add('slide-out')
  hamburger.classList.remove('open')
}

export const mobileNavHandler = (event) => {
  const isOpen = event.target.classList.contains('open')

  if(!isOpen) showMobileNav()
  else hideMobileNav()
}
