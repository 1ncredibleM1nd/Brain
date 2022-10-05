import { createGlobalStyles } from "goober/global";

export const GlobalStyles = createGlobalStyles`

  @font-face {
  font-family: "Inter Light";
  font-weight: 300;
  url('../fonts/Inter-Light.ttf') format('truetype');
}

  @font-face {
    font-family: "Inter Regular";
    font-weight: 400;
    url('../fonts/Inter-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: "Inter Medium";
    font-weight: 500;
    url('../fonts/Inter-Medium.ttf') format('truetype');
  }

  @font-face{
  font-family: "Inter Bold";
    font-weight: 600;
    url('../fonts/Inter-Bold.ttf') format('truetype');
  }

   html {
      box-sizing: border-box;
      font-family: "Inter", sans-serif !important;
      overflow: hidden;
      height: 100%;
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }

    body {
      margin: 0;
      background: #F8F9FF;
      height: 100%;
    }

    input[type="text"] {
       font-family: inherit; /* 1 */
       font-size: inherit; /* 1 */
       line-height: inherit; /* 1 */
       margin: 0; /* 2 */
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
