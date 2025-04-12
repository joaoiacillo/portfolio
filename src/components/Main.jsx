import MainWrapper from "./MainWrapper";

function Main({ children }) {
    return (
        <MainWrapper className="container p-4 flex-grow-1">{children}</MainWrapper>
    )
}

export default Main;