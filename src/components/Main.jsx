import styled from "styled-components";

const MainWrapper = styled.main`
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    height: 100vh;

    h2 {
        margin-bottom: 16px;
        font-size: 1.4rem;
    }

    ul {
        display: flex;
        gap: 8px;
        flex-direction: column;
        justify-content: stretch;
        flex-wrap: wrap;
        max-width: 350px;
    }

    ul li a {
        display: block;
        color: white;
        background-color: #0b5ed7;
        border-left: solid 8px var(--bs-blue);
        border-radius: 8px;
        padding: 4px 12px;
        text-decoration: none;
        transition: background .2s ease-in-out, transform .2s ease-in-out;
    }

    ul li a:hover {
        background-color: var(--bs-blue);
        transform: scale(105%) translateX(2%);
    }

    ul li i {
        display: inline-block;
        transform: translateY(1px);
    }
`;

function Main({ children }) {
    return (
        <MainWrapper className="container p-4">{children}</MainWrapper>
    )
}

export default Main;