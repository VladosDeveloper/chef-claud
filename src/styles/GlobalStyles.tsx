import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }


    body {
        font-family: "Inter", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
		backdrop-filter: blur(5px);
        background: rgb(80,77,135);
        background: linear-gradient(90deg, rgba(80,77,135,1) 0%, rgba(36,125,71,1) 35%, rgba(44,107,148,1) 100%);
    }

    a {
        text-decoration: none;
    }

    button {
        background-color: unset;
        border: none;
    }
	
`