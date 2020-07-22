import './scss/app.scss';
import App from './App'
import blingjs from './utils/helpers/bling';
import { scrollToSection, scrollToTop } from './utils/scroll';

// initialise blingjs
blingjs()

const app = async () => {
  document.getElementById('app').appendChild(await App())
  // Attach event handler
  $$('#nav .a').on('click', scrollToSection)
  $('#sroll-top').on('click', scrollToTop)
}
// Load app
app()

