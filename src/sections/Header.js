import Navigation from '../components/Navigation'

const Header = () => {

  const template = `
    <div class="header">
      ${Navigation()}
    </div>
  `

  return template
}

export default Header;