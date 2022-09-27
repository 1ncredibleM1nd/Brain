import { createGlobalStyles } from "goober/global";

export const GlobalStyles = createGlobalStyles`

  @font-face {
  font-family: "Inter Light";
  font-weight: 300;
  src: url('../fonts/Inter-Light.eot');
  src: url('../fonts/Inter-Light.eot#iefix') format('embedded-opentype'),
  url('../fonts/Inter-Light.woff') format('woff'),
  url('../fonts/Inter-Light.ttf') format('truetype');
}

  @font-face {
    font-family: "Inter Regular";
    font-weight: 400;
    src: url('../fonts/Inter-Regular.eot');
    src: url('../fonts/Inter-Regular.eot#iefix') format('embedded-opentype'),
    url('../fonts/Inter-Regular.woff') format('woff'),
    url('../fonts/Inter-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: "Inter Medium";
    font-weight: 500;
    src: url('../fonts/Inter-Medium.eot');
    src: url('../fonts/Inter-Medium.eot#iefix') format('embedded-opentype'),
    url('../fonts/Inter-Medium.woff') format('woff'),
    url('../fonts/Inter-Medium.ttf') format('truetype');
  }

   html {
      box-sizing: border-box;
      font-family: "Inter Regular", sans-serif;
      font-weight: 300;
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }

    body {
      margin: 0;
      background: #F4F5F8;
    }

  //Scroll bar

  html.mac:not(.resize)::-webkit-scrollbar-thumb,
    html.linux :not(.resize)::-webkit-scrollbar-thumb,
    html.freebsd :not(.resize)::-webkit-scrollbar-thumb,
    html.windows :not(.resize)::-webkit-scrollbar-thumb {
    background-position: center;
    background-repeat: no-repeat;
  }

  html.mac :not(.resize)::-webkit-scrollbar,
    html.linux :not(.resize)::-webkit-scrollbar,
    html.freebsd :not(.resize)::-webkit-scrollbar,
    html.windows :not(.resize)::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  * {
    scrollbar-color: #8c8e94 transparent; /* «цвет ползунка» «цвет полосы скроллбара» */
    scrollbar-width: thin; /* толщина */
  }

  ::-webkit-scrollbar-button {
    width: 0;
    height: 0;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 0;
    border-radius: 50px;
    background-color: #8c8e94;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #8c8e94;
  }

  ::-webkit-resizer {
    background-image: none;
    background-repeat: no-repeat;
    width: 0;
    height: 0;
  }

  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  .recharts-legend-item-text{
    font-size: 14px;
  }

  .recharts-surface{
     margin-right: 10px !important;
  }

  .recharts-default-legend{
     margin-top: 20px;
  }
`;
