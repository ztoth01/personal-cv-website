import Navigation from './Navigation'

const MobileNavigation = () => {

  const template = `
    <sidebar class="mobile-navigation">
      ${ Navigation() }
    </sidebar>
  `

  return template
}

export default MobileNavigation;