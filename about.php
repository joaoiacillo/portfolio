<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>$. /iachilo - Sobre mim</title>
    <link rel="icon" type="image/png" href="/favicon.png" />

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Pixelify+Sans:wght@400..700&display=swap"
      rel="stylesheet"
    />

    <link rel="preload" href="/src/imgs/profile.jpg" as="image" type="image/png" />
    <link rel="preload" href="/src/imgs/bg.jpg" as="image" type="image/png" />

    <link rel="stylesheet" href="/src/css/new-styles.css" />
  </head>

  <body data-bs-theme="dark" data-page="home">
    <div class="container d-flex flex-column min-vh-100 py-md-3 text-center text-md-start">
      <div class="row flex-lg-row-reverse flex-grow-1">
        <!-- Sidebar -->
        <aside class="col-lg-3 mt-3">
          <header class="px-3 pt-4 pb-2 mb-1 bg-black border rounded-top text-center slide">
            <img
              src="/src/imgs/profile.jpg"
              alt="corgi"
              class="rounded-circle border d-block mx-auto mb-2"
              width="100"
            />

            <h1
              class="d-inline-block mb-3 text-primary-emphasis"
              style="font-family: 'Pixelify Sans', sans-serif; font-weight: bold; font-size: 1.2rem"
            >
              $ ./iachilo
            </h1>

            <!-- Social List -->
            <ul class="list-unstyled d-flex justify-content-center align-items-center gap-2 small">
              <li>
                <a href="https://github.com/joaoiacillo" class="text-decoration-none">
                  <i class="bi bi-github"></i>
                </a>
              </li>
              <li>
                <a href="https://dev.to/iachilo">
                  <img src="/src/imgs/logos/dev.png" width="20" />
                </a>
              </li>
              <li>
                <a href="https://iachilo.itch.io/">
                  <img src="/src/imgs/logos/itch-io.png" width="20" style="filter: invert(1)" />
                </a>
              </li>
              <li>
                <a href="https://bsky.app/profile/iacillo.dev.br" class="me-1">
                  <img src="/src/imgs/logos/bsky.png" width="16" style="filter: brightness(0) invert(1)" />
                </a>
              </li>
              <li>
                <a href="mailto:joao@iacillo.dev.br">
                  <i class="bi bi-envelope-at-fill"></i>
                </a>
              </li>
            </ul>
          </header>

          <!-- Navigation -->
          <section class="bg-black border rounded-bottom mb-3 p-3 slide">
            <nav class="main-nav">
              <ul class="list-unstyled m-0">
                <li>
                  <a href="/" class="text-decoration-none d-flex align-items-center gap-2 rounded py-2 ps-3 text-muted">
                    <i class="bi bi-house"></i>
                    Início
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-decoration-none d-flex align-items-center bg-secondary-subtle gap-2 rounded py-2 ps-3 fw-bold text-white"
                  >
                    <i class="bi bi-patch-question-fill"></i>
                    Sobre mim
                  </a>
                </li>
              </ul>
            </nav>
          </section>

          <!-- Construction Marquee -->
          <section class="alert alert-warning small py-2 px-0 mb-4 text-center user-select-none slide">
            <marquee>
              <i class="bi bi-exclamation-triangle me-2"></i>
              Ainda em construção
              <i class="bi bi-exclamation-triangle ms-2"></i>
            </marquee>
          </section>

          <!-- Buttons -->
          <section class="text-center slide" style="text-wrap: balanced; line-height: 2.3rem">
            <img src="/src/imgs/buttons/mobile-friendly.gif" alt="mobile friendly" title="Adaptável para celulares" />
            <img src="/src/imgs/buttons/firefox.gif" alt="tested on firefox" title="Testado no Firefox" />
            <img src="/src/imgs/buttons/ubuntu.gif" alt="ubuntu" title="Ubuntu" />
            <img src="/src/imgs/buttons/gnu-linux.gif" alt="made on gnu/linux" title="Feito no GNU/Linux" />
            <a href="https://wyx.gay" title="wyx dot gay" target="_blank"
              ><img src="https://wyx.gay/img/88x31-wyx.png" alt="wyx dot gay"
            /></a>
          </section>
        </aside>

        <!-- Page Content -->
        <div class="col d-flex flex-column justify-content-between">
          <main>
            <div class="row gap-3 p-3">
              <section class="p-3 slide">
                <h2><i class="bi bi-patch-question-fill me-1"></i> Sobre mim</h2>

                <div class="bg-black py-2 px-3 border border-top-0 rounded-bottom">
                  <p>
                    Oi, eu sou o João, criador desse site. Fico feliz que tenha entrado aqui para saber mais sobre minha
                    história. Então fique confortável e aproveite a leitura ;)
                  </p>

                  <p>
                    Eu sempre fui curioso quanto a computadores. Meu primeiro foi um PC de tubo branco, daqueles bem
                    antigos mesmo, que eu ainda compartilhava com a minha família. Incrivelmente nunca tivemos Internet
                    discada antigamente, então passei muitos meses apenas explorando o computador e jogando os joguinhos
                    que vinham nele.
                  </p>

                  <p>
                    Foi apenas depois de alguns anos quando tive acesso ao Windows 7, aos meus 12 anos, que comecei a
                    ter contato com a programação. Comecei fazendo pequenos protótipos e explorando os projetos de
                    outras pessoas no Scratch.
                  </p>

                  <img src="/src/imgs/about/fnaf-world-scratch.png" class="img-fluid rounded mb-3" />

                  <p>
                    Depois de um tempo ganhando experiência no Scratch, eu comecei a explorar a minha primeira linguagem
                    de programação: Python. Ele é simples, intuitivo e fácil de aprender. Isso para mim foi uma mina de
                    ouro e um motivo perfeito para começar a minha jornada na programação <i>de texto</i>.
                  </p>

                  <div class="alert alert-dark">
                    Este é o fim por enquanto! Criei essa página e esse texto inicial apenas para começar a expandir o
                    site, mas em breve irei continuar escrevendo aqui.
                    <a href="/">Volte para a página principal clicando aqui</a>.
                  </div>
                </div>
              </section>
            </div>
          </main>

          <footer class="small user-select-none p-3 text-center text-muted slide">
            <p class="mb-0">© 2025 João Iacillo</p>
            <p>Feito com HTML, CSS e JavaScript puros.</p>
          </footer>
        </div>
      </div>
    </div>

    <script
      defer
      src="https://cloud.umami.is/script.js"
      data-website-id="e4e5ac55-483a-44b2-ba4f-b0a1f19356b5"
    ></script>
  </body>
</html>
