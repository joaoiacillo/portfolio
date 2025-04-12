import './App.css'

import Header from './components/Header';
import Main from './components/Main';
import Card from './components/Card';
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

            <div className="d-flex gap-3 overflow-x-scroll pb-3" style={{ maxWidth: "350px", width: "100vw" }}>
              <Card
                name={
                <>
                  Linux <br />
                  Desktop <br />
                  Entry <br />
                  Generator
                </>
                }
                htmlTitle="Linux Desktop Entry Generator"
                to="https://tools.iacillo.dev.br/linux/desktop-entry/"
              />
            </div>
          </section>

          <section className="p-3 slide">
            <h2><i className="bi bi-kanban me-1"></i> Projetos</h2>
            <ul className="list-unstyled">
              <div className='alert alert-primary'>Nada aqui <strong>ainda</strong>.</div>
            </ul>
          </section>
        </div>


        { /* Adicionar seção de graduação com um slider do 1° semestre até o último em JS */}


      </Main>

      <Footer />
    </AppWrapper>
  )
}

export default App
