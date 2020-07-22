import Header from './components/Header'
import Hero from './components/Hero'
import Info from './components/Info'
import Experience from './components/Experience'
import Education from './components/Education'
import FunFact from './components/FunFact'

import './scss/app.scss'

const App = async () => {
  const template = document.createElement('template')
  template.innerHTML = `
    <div class="container">
      ${Header()}
      ${Hero()}
      ${Info()}
      ${Experience()}
      ${Education()}
      ${FunFact()}
    </div>
  `
  // Return a new node from template
  return template.content.cloneNode(true)
}


export default App;