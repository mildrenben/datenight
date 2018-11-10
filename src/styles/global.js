import { injectGlobal } from 'styled-components'

// Write global styles here, like resets and fonts

injectGlobal`
  body {
    font-size: 16px;
    margin: 1em;
  }
  * {
    font-family: 'Roboto', sans-serif;
    color: rgba(0,0,0,0.9);
  }
`