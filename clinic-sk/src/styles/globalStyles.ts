import { normalize } from "styled-normalize";
import { css, createGlobalStyle } from "styled-components";

// import {
//   heading1,
//   heading2,
//   heading3,
//   bodyRegular,
//   bodySemibold,
//   captionRegular,
// } from './mixins/fonts';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  ${({ theme }) => css`
    ::-webkit-scrollbar {
      background-color: transparent;
      border-radius: 0;
      height: 8px;
      width: 8px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: transparent;
    }

    ::-webkit-scrollbar-corner {
      background: transparent;
    }

    ::-webkit-scrollbar:hover {
      background-color: transparent;
    }

    ::-webkit-scrollbar:active {
      background-color: transparent;
    }

    html {
      *:hover::-webkit-scrollbar {
        background-color: transparent;
      }

      *:hover::-webkit-scrollbar-thumb {
        background-color: ${theme.colors.globalColor3};
        background-clip: padding-box;
        border-radius: 4px;
        padding: 100px 0 0;
      }

      *::-webkit-scrollbar-thumb:hover {
        background-color: ${theme.colors.globalColor3};
      }

      *::-webkit-scrollbar-thumb:active {
        background-color: ${theme.colors.globalColor3};
      }

      * {
        scrollbar-width: thin;
        scrollbar-color: ${theme.colors.globalColor3} transparent;
      }
    }
  `};

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: "Playfair Display", Sans-serif;
  }

  body {
    position: relative;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    overflow-y: hidden;
    color: ${({ theme }) => theme.colors.globalColor3};
    background-color: ${({ theme }) => theme.colors.globalColor5};
  }
  
  h1 {
    margin: 0;
  }

`;

export { GlobalStyles };
