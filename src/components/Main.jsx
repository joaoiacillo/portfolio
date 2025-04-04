import styled from "styled-components";

const MainWrapper = styled.main`
    
`;

function Main({ children }) {
    return (
        <MainWrapper className="container px-4 slide slide-right">{children}</MainWrapper>
    )
}

export default Main;