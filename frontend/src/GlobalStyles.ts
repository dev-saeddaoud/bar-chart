import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`${css`


html{
    --bg-color: #17252a;
    --bar-color #2B7A78;
    --box-color: #def2f1;
    --text-color: #eee;
}

*, *::after, *::before{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    width: 100vw;
    height: 100vh;
    font-family: 'Roboto', sans-serif;
    background-color: var(--bg-color);
    display: flex;
    justify-content: center;
    align-items: center;
}
`}`;

export default GlobalStyles;
