import './App.css'

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import styled from "styled-components";

const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  height: 100vh;
`;

function App() {
  return (
    <AppWrapper>
      <Header />

      <Main>
        <div className="row gap-3">
          <section className="col p-3 border rounded shadow slide">
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
          <section className="col p-3 border rounded shadow slide">
            <h2><i className="bi bi-tools me-1"></i> FERRAMENTAS</h2>
            <ul className="list-unstyled">
              <li>
                <a href="https://tools.iacillo.dev.br/linux/desktop-entry/">
                  <i className="bi bi-link-45deg"></i> Linux Desktop Entry Generator
                </a>
              </li>
            </ul>
          </section>
        </div>

        <div className="flex-grow-1"></div>

        { /* Adicionar seção de graduação com um slider do 1° semestre até o último em JS */ }

        <section className="mt-3 text-center small user-select-none">
          <a target="_blank" className="link-secondary" href="https://www.flaticon.com/br/icones-gratis/corgi" title="corgi ícones">Corgi ícones criados por ultimatearm - Flaticon</a>
        </section>
      </Main>
    </AppWrapper>
  )
}

export default App
