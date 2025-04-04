import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        --bs-font-sans-serif: "Montserrat", sans-serif;
    }
    
    #root {
        display: flex;
        flex-direction: column;
        justify-content: start;
        min-height: 100vh;
    }

    .main-title {
        font-family: "Bytesized", sans-serif;
    }

    .slide {
        animation: slide 0.5s ease-in-out;
    }

    .slide-right {
        --slide-initial-pos: -5px;
    }

    .slide-left {
        --slide-initial-pos: 5px;
    }

    @keyframes slide {
        0% {
            opacity: 0;
            transform: translateX(var(--slide-initial-pos));
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }

    main section {
        margin-bottom: 48px;
    }

    main h2 {
        text-align: center;
        margin-bottom: 16px;
        font-size: 1.3rem;
    }

    main ul {
        display: flex;
        gap: 8px;
        flex-direction: column;
        justify-content: stretch;
        flex-wrap: wrap;
        max-width: 350px;
        margin: 0 auto;
    }

    main ul li a {
        display: block;
        color: white;
        background-color: #0b5ed7;
        border-left: solid 8px var(--bs-blue);
        border-radius: 8px;
        padding: 4px 12px;
        text-decoration: none;
        transition: background .2s ease-in-out, transform .2s ease-in-out;
    }

    main ul li a:hover {
        background-color: var(--bs-blue);
        transform: scale(105%);
    }

    main ul li i {
        display: inline-block;
        transform: translateY(1px);
    }

    footer {
        margin-top: auto;
    }
`;

export default GlobalStyle;
