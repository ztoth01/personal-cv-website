

const Header = () => {
  const template = `
    <div class="header">
      <h1>Zoltan Toth Personl stuff</h1>
      <nav id="nav">
        <a class="a" href="#" data-scroll="1">Main</a>
        <a class="a" href="#" data-scroll="2">Info</a>
        <a class="a" href="#" data-scroll="3">Skills</a>
        <a class="a" href="#" data-scroll="4">Experience</a>
        <a class="a" href="#" data-scroll="5">Education</a>
        <a class="a" href="#" data-scroll="6">Fun Fact</a>
      </nav>
    </div>
  `

  return template
}

export default Header;