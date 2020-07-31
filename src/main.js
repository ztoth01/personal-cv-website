import './scss/app.scss';
import App from './App'
import blingjs from './utils/helpers/bling';
import { toogleClass } from './utils/helpers/toogleClass';
import { scrollToSection } from './utils/scroll';

// initialise blingjs
blingjs()

function activateMobileMenu() {
  toogleClass($('#hamburger'), 'open')
  toogleClass($('.overlay'), 'fade-in')
  toogleClass($('.overlay'), 'fade-out')
  toogleClass($('.mobile-navigation'), 'slide-in')
  toogleClass($('.mobile-navigation'), 'slide-out')
}

const bindListeners = () => {
  const typeOfNavigation = window.innerWidth < 961 ? '.mobile-navigation .navigation--item' : '.header .navigation--item'
  $$(typeOfNavigation).on('click', scrollToSection)
  $('#scroll-top').on('click', scrollToSection)
  $('#hamburger').on('click', activateMobileMenu)
}

const app = async () => {
  document.getElementById('app').appendChild(await App())
  bindListeners()
}
// Load app
app()

// that is needed to handle navigation
window.addEventListener('resize', bindListeners)
