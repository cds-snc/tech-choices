import { createGlobalStyle } from "./index";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html,
  body {
    min-height: 100%;
    min-width: 320px;
    padding: 0;
    margin: 0;
    background-color:#fff;
    font-family: 'Open Sans', sans-serif;
    font-weight: 100;
  }
  .wrapper{
    position: relative;
    min-height: 100vh;
  }

  .main-content{
    padding-bottom: 30px;  /* Footer height */
  }

  footer{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 30px; 
    
  }
  h2{
    font-family: 'Oswald', sans-serif;
  }
`;

export default GlobalStyles;
