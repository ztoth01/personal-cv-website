import './scss/app.scss';
import App from './App'
import blingjs from './utils/helpers/bling';
import { mobileNavHandler } from './utils/helpers/mobileNavHandler';
import { scrollToSection, isMobile } from './utils/scroll';

// initialise blingjs
blingjs()

const bindListeners = () => {
  const typeOfNavigation = isMobile() ? '.mobile-navigation .navigation--item' : '.header .navigation--item'
  $$(typeOfNavigation).on('click', scrollToSection)
  $('#scroll-top').on('click', scrollToSection)
  $('#hamburger').on('click', mobileNavHandler)
}

const app = async () => {
  $('#app').appendChild(await App())
  bindListeners()
}
// Load app
app()

// that is needed to handle navigation
window.addEventListener('resize', bindListeners)
