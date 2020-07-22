import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

export const scrollToSection = () => {
  const id = event.target.getAttribute('data-scroll')
  const scrollEndElemTop = $(`.section[data-anchor="${id}"]`).getBoundingClientRect().top

  window.scroll({
    top: scrollEndElemTop,
    left: 0,
    behavior: 'smooth'
  });
}

export const scrollToTop = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}