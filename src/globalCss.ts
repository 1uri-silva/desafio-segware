import styled, { createGlobalStyle } from 'styled-components';

export const GlobalCss = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :root {
    --background: #F2F3F5;
    --gray-line: #DCDDE0;
    --text: #666666;
    --title: #2E384D;
    --green: #4CD62B;
    --red: #FF0000;
    --blue:  #0000FF
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: var(--background);
    color: var(--text);
  }
  body, input, button {
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;

export const Container = styled.main`
	width: 100vw;
	height: 100vh;
	overflow-y: auto;
	overflow-x: hidden;
	background: var(--background);
`;
