import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        --bs-font-sans-serif: "Montserrat", sans-serif;
    }

    .slide {
        --slide-initial-pos: -5px;
        animation: slide 0.2s cubic-bezier(.16,.51,.74,1.68);
    }

    @keyframes slide {
        0% {
            opacity: 0;
            transform: translateX(var(--slide-initial-pos)) scaleX(0.98);
        }
        100% {
            opacity: 1;
            transform: translateX(0) scaleX(1);
        }
    }
    
`;

export default GlobalStyle;
