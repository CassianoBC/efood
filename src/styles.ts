import { createGlobalStyle } from "styled-components";

export const colors = {
    white: '#FFFFFF',
    iceWhite: '#FFF8F2',
    salmon: '#E66767',
    burntYellow: '#FFEBD9',

}

export const breakpoints = {
    desktop: '1024px',
    tablet: '768px',
    mobile: '480px'
}

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        list-style: none;
        overflow-x: hidden;
    }

    body {
        background-color: ${colors.iceWhite};
    }

    .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    }

`