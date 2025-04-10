import './App.css'

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import styled from "styled-components";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  return (
    <AppWrapper>
      <Header />

      <Main>
        <div className="text-center gap-3 d-flex align-items-center flex-column">
        <section className="p-3 slide">
            <h2><i className="bi bi-tools me-1"></i> Ferramentas</h2>
            <ul className="list-unstyled">
              <li>
                <a href="https://tools.iacillo.dev.br/linux/desktop-entry/">
                  <i className="bi bi-link-45deg"></i> Linux Desktop Entry Generator
                </a>
              </li>
            </ul>
          </section>

          <section className="p-3 slide">
            <h2><i className="bi bi-kanban me-1"></i> Projetos</h2>
            <ul className="list-unstyled">
              <div className='alert alert-primary'>Nada aqui <strong>ainda</strong>.</div>
            </ul>
          </section>
        </div>


        { /* Adicionar seção de graduação com um slider do 1° semestre até o último em JS */ }

        
      </Main>

      <footer className="mt-3 text-center small user-select-none p-3">
        <p className="m-0 slide slide-right text-muted user-select-none">
          © {new Date().getFullYear()} João Iacillo - Todos os Direitos Reservados
        </p>
      </footer>
    </AppWrapper>
  )
}

export default App
