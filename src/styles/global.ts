import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --white:          #ffffff;
    --background:     #F2F3F5;
    --gray-line:      #DCDDE0;
    --text:           #666666;
    --text-highlight: #B3B9FF;
    --title:          #2E384D;
    --red:            #E83F5B;
    --green:          #4CD62B;
    --blue:           #5965E0;
    --blue-dark:      #4953B8;
    --blue-twitter:   #2AA9E0;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    color: var(--text);
  }

  body, input, textarea, button {
    font: 400 1rem 'Inter', sans-serif;
  }

  a {
    text-decoration: none;
  }

  h1, h2, h3, span, small {
    color: var(--text);
  }

  button {
    cursor: pointer
  }

  .app {
    height: 100vh;
    max-width: 1000px;
    margin: 0 auto;
    padding: 2.5rem 2rem;
    display: flex;
    flex-direction: column;
  }
`

export default GlobalStyle
