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
    font-size:2em;
    justify-content:center;
    margin-top:2em;
    margin-bottom:2em;
  }

  h2,h3{
    font-family: 'Oswald', sans-serif;
    display:flex;
    position:relative;
  }
  
  h3{
    margin-top:1.5em;
    color:black;
  }

  h2::after {
    content: '';
    display: block;
    position: absolute;
    height: 3px;
    background: #FFCC33;
    bottom: -1.5rem;
    width: 5rem;
    left: 50%;
    transform: translateX(-50%);
  }

  .product{
    background-color:#22596d;
    color#fff;
    padding:3em;
    margin-bottom:3em;
  }

  .product a{
    color:#fff;
  }

  .product h3{
    color:#fff;
    font-size:1.5em;
    margin-top:1em;

  }

  .product ul{
    color:#fff;
  }

  .product ul li{
    color: #f0ca4d;
    line-height:1.5em;
  }

  .product ul li span{
    color: #fff;
  }

  p:first{
    font-size:1.2em;
    padding-left:1.2em;
    padding-right:1.2em;
  }

  cds-tag{
    display:inline-block;
  }
`;

export default GlobalStyles;
