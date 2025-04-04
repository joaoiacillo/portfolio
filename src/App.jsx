import './App.css'

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />

      <Main> 
        <section>
          <h2><i className="bi bi-kanban me-1"></i> PROJETOS</h2>
          <ul className="list-unstyled">
            <li>
              <a href="#"><i className="bi bi-link-45deg"></i> Lorem Ipsum</a>
            </li>
            <li>
              <a href="#"><i className="bi bi-link-45deg"></i> Dolor Sit</a>
            </li>
            <li>
              <a href="#"><i className="bi bi-link-45deg"></i> Amet.</a>
            </li>
          </ul>
        </section>
        <section>
          <h2><i className="bi bi-tools me-1"></i> FERRAMENTAS</h2>
          <ul className="list-unstyled">
            <li>
              <a href="https://tools.iacillo.dev.br/linux/desktop-entry/">
                <i className="bi bi-link-45deg"></i> Linux Desktop Entry Generator
              </a>
            </li>
          </ul>
        </section>

        { /* Adicionar seção de graduação com um slider do 1° semestre até o último em JS */ }
      </Main>

      <Footer />
    </>
  )
}

export default App
