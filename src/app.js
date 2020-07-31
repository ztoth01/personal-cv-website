import Header from './sections/Header'
import Main from './sections/Main'
import Info from './sections/Info'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Education from './sections/Education'
import FunFact from './sections/FunFact'
import Overlay from './components/Overlay'
import MobileNavigation from './components/MobileNavigation'
import Hamburger from './components/Hamburger'

import './scss/app.scss'

const App = async () => {
  const template = document.createElement('template')
  template.innerHTML = `
    <div class="container">
      ${Hamburger()}
      ${MobileNavigation()}
      ${Overlay()}
      ${Header()}
      ${Main()}
      ${Info()}
      ${Experience()}
      ${Skills()}
      ${Education()}
      ${FunFact()}
      <button id="scroll-top">go to top</button>
    </div>
  `
  // Return a new node from template
  return template.content.cloneNode(true)
}

export default App;