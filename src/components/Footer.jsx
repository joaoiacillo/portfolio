function Footer() {
    return (
        <footer className="mt-3 text-center small user-select-none p-3">
            <p className="m-0 slide slide-right text-muted user-select-none">
            © {new Date().getFullYear()} João Iacillo - Todos os Direitos Reservados
            </p>
        </footer>
    )
}

export default Footer;