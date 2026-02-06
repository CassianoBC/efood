import { createGlobalStyle } from "styled-components";

export const cores = {
    branco: '#FFFFFF',
    brancoGelo: '#FFF8F2',
    salmao: '#E66767',
    amareloQueimado: '#FFEBD9',

}

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        list-style: none;
    }

    body {
        background-color: ${cores.brancoGelo};
    }

    .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    }

`