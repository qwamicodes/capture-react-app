import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        background: #1b1b1b;
        font-family: "Inter", sans-serif;
    }

    button {
        font-family: "Inter", sans-serif;
        cursor: pointer;
        padding: 1rem 2rem;
        font-weight: bold;
        color: white;
        background: transparent;
        font-size: 1rem;
        border: 3px solid #23d997;
        transition: all .5s ease;

        &:hover {
            background-color: #23d997;

        }
    }

    h2 {
        font-weight: lighter;
        font-size: 4rem;

        span {
            color: #23d997;
            font-weight: bold;
        }
    }

    h3 {
        color: #fff;
    }

    h4 {
        font-weight: bold;
        font-size: 2rem;
    }

    a {
        font-size: 1.1rem;
        text-decoration: none;
    }

    p {
        line-height: 150%;
        font-size: 1.4rem;
        color: #ccc;
        padding: 3rem 0;
    }

    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #23d997;
        border-radius: 100px;
        width: 80%;
    }
    
    ::-webkit-scrollbar-track {
        background-color: #ccc;
    }
    
    ::-webkit-scrollbar-track-piece {
        background-color: #fff;
    }

`;

export default GlobalStyle;
