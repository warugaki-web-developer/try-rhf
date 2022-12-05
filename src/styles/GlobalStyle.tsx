import { css } from '@emotion/react';

const GlobalStyle = css`
  :root {
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: rgb(255 255 255 / 87%);
    background-color: #242424;
    color-scheme: light dark;
    font-synthesis: none;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-size-adjust: 100%;
  }

  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }

  a:hover {
    color: #535bf2;
  }

  body {
    display: flex;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
    margin: 0;
  }

  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }

  button {
    padding: 0.6em 1.2em;
    font-family: inherit;
    font-size: 1em;
    font-weight: 500;
    cursor: pointer;
    background-color: #1a1a1a;
    border: 1px solid transparent;
    border-radius: 8px;
    transition: border-color 0.25s;
  }

  button:hover {
    border-color: #646cff;
  }

  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  @media (prefers-color-scheme: light) {
    :root {
      color: #213547;
      background-color: #fff;
    }

    a:hover {
      color: #747bff;
    }

    button {
      background-color: #f9f9f9;
    }
  }

  #root,
  #storybook-root {
    max-width: 1280px;
    padding: 2rem;
    margin: 0 auto;
    text-align: center;
  }
`;

export default GlobalStyle;