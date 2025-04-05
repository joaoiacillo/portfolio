function Header() {
    return (
        <header className="bg-black py-4 px-2 text-center d-flex flex-column align-items-center" style={{ gridRow: "span 2" }}>
            <img src="/imgs/logo.png" alt="corgi" className="slide" style={{ maxWidth: "64px" }} />

            <h1 className="main-title mb-2 slide slide-right" style={{ fontFamily: "'Bytesized', sans-serif", fontSize: "1.6rem" }}>João Iacillo</h1>

            <div className="mb-3 slide slide-right">
            <span className="rounded-pill py-0 px-5 d-block fw-bold text-white opacity-50" style={{ fontSize: "0.7rem" }}>
                <i className="bi bi-laptop"></i> Desenvolvedor Web<br />
                <i className="bi bi-mortarboard"></i> Ciência da Computação
            </span>
            </div>
            <ul className="list-unstyled d-inline-flex justify-content-center flex-grow-1 small gap-2 slide slide-right">
                <li><a href="mailto:joao@iacillo.dev.br">E-mail</a></li>
                <li><a href="https://github.com/joaoiacillo">GitHub</a></li>
                <li><a href="https://github.com/joaoiacillo">LinkedIn</a></li>
            </ul>
            <p className="m-0 slide slide-right text-secondary user-select-none" style={{ fontSize: "0.8rem" }}>
                © {new Date().getFullYear()} João Iacillo
            </p>
        </header>
)
}

export default Header;