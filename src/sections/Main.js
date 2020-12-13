import Avatar from '../components/Avatar'

const Main = () => {
  const template = `
    <section class="main section" data-anchor="main">
      ${ Avatar() }
      <h1>This is the main section</h1>
    </section>
  `

  return template
}

export default Main;