'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
        outline: 0;
        border: 0;
        padding: 0;
        margin: 0;
    }

    :root {
        --black: #171717;
        --white: #ECECEC;
        --gray: #3A3A3A;
        --primary: #3DB78C;
        --secondary: #13131E;
    }

    html, body {
        background-color: var(--black);
    }
`;