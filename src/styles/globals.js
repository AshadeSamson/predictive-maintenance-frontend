import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


*, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #eee;
    color: black;
    overflow: hidden;
    font-family: "Merriweather", serif;
}

a {
    text-decoration: none;
    color: white;
}


`;

export default GlobalStyles;
