const Navigation = () => {
  const naviagationItems = ['Main','Info','Experience','Skills','Education','Fun Fact']

  const template = `
    <nav class="navigation">
      <ul>
        ${naviagationItems.map((elem, index) => {
          const formatedDataAttr = elem.replace(/\s+/g, '-').toLowerCase()
          const activeCalss = index === 0 ? 'active' : ''
          return `
            <li
              class="navigation--item ${activeCalss}"
              data-scroll="${formatedDataAttr}">
              ${elem}
            </li>`
          }).join('')}
      <ul>
    </nav>
  `

  return template
}

export default Navigation;