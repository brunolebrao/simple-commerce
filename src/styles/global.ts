import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }
`
export default GlobalStyle
