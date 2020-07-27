const Navigation = () => {
  const naviagationItems = ['Main','Info','Experience','Skills','Education','Fun Fact']

  const template = `
    <nav class="navigation">
      ${naviagationItems.map((elem, index) => {
        const formatedDataAttr = elem.replace(/\s+/g, '-').toLowerCase()
        const activeCalss = index === 0 ? 'active' : ''
        return `
          <a
            class="navigation--item ${activeCalss}"
            href="#"
            data-scroll="${formatedDataAttr}">
            ${elem}
          </a>`
        }).join('')}
    </nav>
  `

  return template
}

export default Navigation;