function Header() {
    return (
        <header className="pt-5 pb-1 px-3 d-flex flex-column align-items-center justify-content-between container">
            <div>
                <img src="/imgs/logo.png" alt="corgi" className="slide" style={{ maxWidth: "64px" }} />
                <h1 className="main-title slide d-inline-block" style={{ fontFamily: "'Pixelify Sans', sans-serif", fontWeight: "bold", fontSize: "1.6rem" }}>João Iacillo</h1>
            </div>

            <ul className="list-unstyled d-flex align-items-center small gap-2 slide slide-right mb-4">
                <li><a href="mailto:joao@iacillo.dev.br" className="link-light">E-mail</a></li>
                <li><a href="https://github.com/joaoiacillo" className="link-light">GitHub</a></li>
                <li><a href="https://github.com/joaoiacillo" className="link-light">LinkedIn</a></li>
                <li><a href="https://iachilo.itch.io/" className="link-light">Itch.io</a></li>
            </ul>

            <div className="alert alert-warning slide">
                <i className="bi bi-exclamation-triangle me-2"></i>
                Este website ainda está em construção.
            </div>
        </header>
    )
}

export default Header;