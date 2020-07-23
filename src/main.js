import './scss/app.scss';
import App from './App'
import blingjs from './utils/helpers/bling';
import { scrollToSection } from './utils/scroll';

// initialise blingjs
blingjs()

const app = async () => {
  document.getElementById('app').appendChild(await App())
  // Attach event handler
  $$('#nav .a').on('click', scrollToSection)
  $('#scroll-top').on('click', scrollToSection)
}
// Load app
app()


