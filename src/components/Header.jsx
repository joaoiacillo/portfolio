function Header() {
    return (
        <header className="pt-5 pb-1 px-2 text-center d-flex flex-column align-items-center">
            <img src="/imgs/logo.png" alt="corgi" className="slide" style={{ maxWidth: "128px" }} />

            <h1 className="main-title mb-2 slide slide-right" style={{ fontFamily: "'Bytesized', sans-serif", fontSize: "1.6rem" }}>João Iacillo</h1>

            <ul className="list-unstyled d-inline-flex justify-content-center flex-grow-1 small gap-2 slide slide-right">
                <li><a href="mailto:joao@iacillo.dev.br">E-mail</a></li>
                <li><a href="https://github.com/joaoiacillo">GitHub</a></li>
                <li><a href="https://github.com/joaoiacillo">LinkedIn</a></li>
                <li><a href="https://iachilo.itch.io/">Itch.io</a></li>
            </ul>

            <div className="alert alert-warning">
                <i className="bi bi-exclamation-triangle me-2"></i>
                Este website ainda está em construção.
            </div>
            
        </header>
)
}

export default Header;