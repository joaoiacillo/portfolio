function Header() {
    return (
        <header className="bg-black shadow-sm border-bottom mb-4">
            <div className="container p-4 pb-2 text-center slide slide-right">
                <h1 className="main-title">João Iacillo</h1>
                <div className="mb-3">
                    <span className="rounded-pill py-0 px-5 d-inline-block small fw-bold text-white opacity-50">
                        <div className="mb-2">
                            <i className="bi bi-laptop me-1"></i> Desenvolvedor Web
                        </div>
                        <div>
                            <i className="bi bi-mortarboard me-1"></i> Ciência da Computação
                        </div>
                    </span>
                </div>
                <ul className="list-unstyled d-inline-flex small gap-2">
                    <li><a href="mailto:joao@iacillo.dev.br">E-mail</a></li>
                    <li><a href="https://github.com/joaoiacillo">GitHub</a></li>
                    <li><a href="https://github.com/joaoiacillo">LinkedIn</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;