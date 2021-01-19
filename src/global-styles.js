import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
   @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
   input:focus, textarea:focus, select:focus, button:focus{
        outline: none;
    }
   ::placeholder {
  opacity: 0.5;
  font-weight: 300; /* Firefox */
   }
  html, body{
    background-color: #fff;
    font-size: 16px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    min-width: 300px;
    overflow-x: hidden;
    overflow-y: hidden;
    text-rendering: optimizeLegibility;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
    font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: #fff;
      }
    #root {
      display: flex;
    }
    h2{
      display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;}`;
