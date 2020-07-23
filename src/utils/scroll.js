import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

export const scrollToSection = () => {
  event.preventDefault()
  const id = event.target.getAttribute('data-scroll') || null
  const scrollTo = id ? $(`.section[data-anchor="${id}"]`).offsetTop : 0

  window.scroll({
    top: scrollTo,
    left: 0,
    behavior: 'smooth'
  });
}

window.addEventListener('scroll', () => {
  let scrollDistance = window.pageYOffset
  const links = $$('#nav .a')

  $$('.section').forEach((section, index) => {
    if (section.offsetTop <= scrollDistance) {
      links.forEach((elem) => { elem.classList.remove('active') })
      links[index].classList.add('active')
    }
  })
});