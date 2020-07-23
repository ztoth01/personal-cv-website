const Header = () => {
  const naviagationItems = ['Main','Info','Experience','Skills','Education','Fun Fact']

  const template = `
    <div class="header">
      <nav id="nav">
        ${naviagationItems.map((elem) => {
          const formatedDataAttr = elem.replace(/\s+/g, '-').toLowerCase()

          return `
            <a class="a" href="#" data-scroll="${formatedDataAttr}">
              ${elem}
            </a>`
          }).join('')}
      </nav>
    </div>
  `

  return template
}

export default Header;