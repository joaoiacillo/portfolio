<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>$. /iachilo</title>
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
            <a class="d-block h-card" href="https://iacillo.dev.br" rel="me">
              <img src="/src/imgs/profile.jpg" class="rounded-circle border d-block mx-auto mb-2" width="100" />

              <h1
                class="d-inline-block mb-3 text-primary-emphasis"
                style="font-family: 'Pixelify Sans', sans-serif; font-weight: bold; font-size: 1.2rem"
              >
                $ ./iachilo
              </h1>
            </a>

            <!-- Social List -->
            <ul class="list-unstyled d-flex justify-content-center align-items-center gap-2 small">
              <li>
                <a href="https://github.com/joaoiacillo" class="text-decoration-none" rel="me">
                  <i class="bi bi-github"></i>
                </a>
              </li>
              <li>
                <a href="https://dev.to/iachilo" rel="me">
                  <img src="/src/imgs/logos/dev.png" width="20" />
                </a>
              </li>
              <li>
                <a href="https://iachilo.itch.io/" rel="me">
                  <img src="/src/imgs/logos/itch-io.png" width="20" style="filter: invert(1)" />
                </a>
              </li>
              <li>
                <a href="https://bsky.app/profile/iacillo.dev.br" class="me-1" rel="me">
                  <img src="/src/imgs/logos/bsky.png" width="16" style="filter: brightness(0) invert(1)" />
                </a>
              </li>
              <li>
                <a href="mailto:joao@iacillo.dev.br" rel="me">
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
                  <a
                    href="#"
                    class="text-decoration-none d-flex align-items-center bg-secondary-subtle gap-2 rounded py-2 ps-3 fw-bold text-white"
                  >
                    <i class="bi bi-house-fill"></i>
                    Início
                  </a>
                </li>
                <li>
                  <a
                    href="/about.php"
                    class="text-decoration-none d-flex align-items-center gap-2 rounded py-2 ps-3 text-muted"
                  >
                    <i class="bi bi-patch-question"></i>
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
              <div class="bg-black py-3 px-3 border rounded text-center slide">
                <h3 class="fw-bold">Bem vindo, aventureiro(a)!</h3>
                <div class="small mx-auto" style="max-width: 700px; text-wrap: balance">
                  <hr />
                  <p>
                    Sou o João, um estudante de ciência da computação na Estácio e auto-didata desde pequeno, e este é o
                    meu site!
                  </p>
                  <p>
                    Comecei minha aventura criando pequenos joguinhos no
                    <a href="https://scratch.mit.edu/" target="_blank">Scratch</a>, então evoluindo para Python, e
                    finalmente me fixando no desenvolvimento web. Hoje em dia também estudo sobre programação de
                    softwares nativos em C, e jogos em Godot e GameMaker.
                  </p>
                  <hr />
                  <a href="/about.php">Saiba mais sobre mim</a>
                  ou então continue scrollando e explorando!
                  <i class="bi bi-arrow-down-short"></i>
                </div>
              </div>
            </div>

            <div class="row gap-3 p-3">
              <!-- Personal Projects -->
              <section class="col-md slide">
                <h2><i class="bi bi-gear me-1"></i> Meus Projetos</h2>
                <div class="bg-black py-2 px-3 border border-top-0 rounded-bottom">
                  <ul class="list-unstyled mb-3 small">
                    <li>
                      <a target="_blank" href="https://github.com/joaoiacillo/bsky-movie-guesser">
                        /bsky-movie-guesser
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://github.com/joaoiacillo/1sti-react-challenge">
                        /1sti-react-challenge
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://github.com/joaoiacillo/qrcode-creator"> /qrcode-creator </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://github.com/joaoiacillo/tom"> /tom </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://github.com/joaoiacillo/steam-dmenu"> /steam-dmenu </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://github.com/joaoiacillo/vault-guard"> /vault-guard </a>
                    </li>
                  </ul>
                  <a href="https://github.com/joaoiacillo" class="btn btn-dark py-1 w-100" target="_blank">
                    <i class="bi bi-github me-1"></i>
                    Tem mais no GitHub
                  </a>
                </div>
              </section>

              <div class="col-md slide">
                <!-- Personal Games -->
                <section class="mb-3">
                  <h2><i class="bi bi-controller me-2"></i> Meus Jogos</h2>
                  <div class="bg-black py-2 px-3 border border-top-0 rounded-bottom">
                    <ul class="list-unstyled mb-3 small">
                      <li>
                        <a target="_blank" href="https://iachilo.itch.io/almm">/allm</a>
                      </li>
                    </ul>
                    <a href="https://iachilo.itch.io" class="btn btn-dark py-1 w-100" target="_blank">
                      <img
                        src="/src/imgs/logos/itch-io.png"
                        width="16"
                        alt="logo da itch.io"
                        style="filter: invert(1)"
                      />
                      Tem mais no itch.io
                    </a>
                  </div>
                </section>

                <!-- Utilities -->
                <section>
                  <h2><i class="bi bi-box-seam me-1"></i> Utilitários</h2>
                  <div class="bg-black py-2 px-3 border border-top-0 rounded-bottom">
                    <ul class="list-unstyled mb-2 small">
                      <li>
                        <a href="https://tools.iacillo.dev.br/linux/desktop-entry/" target="_blank">
                          /linux-desktop-entry-generator
                        </a>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>

            <!-- Recent Posts -->
            <section class="p-3 slide">
              <h2><i class="bi bi-pen me-1"></i> Posts Recentes</h2>

              <div class="bg-black py-2 px-3 border border-top-0 rounded-bottom">
                <div class="spinner-border text-secondary-emphasis" role="status" id="posts-spinner">
                  <span class="visually-hidden">Carregando posts...</span>
                </div>

                <ul class="list-unstyled" id="posts-list"></ul>

                <a href="https://dev.to/iachilo" class="btn btn-dark p-1 text-decoration-none w-100">
                  <img
                    src="/src/imgs/logos/dev.png"
                    width="16"
                    alt="logo da itch.io"
                    style="filter: invert(1)"
                    class="me-1"
                  />
                  Tem mais no dev.to</a
                >
              </div>
            </section>

            <!-- Books I'm Reading -->
            <section class="p-3 slide">
              <h2><i class="bi bi-book me-1"></i> Lendo Atualmente</h2>
              <div class="bg-black py-2 px-3 border border-top-0 rounded-bottom">
                <p class="small">
                  Não sou muito de ler livros, mas adoro ler documentações e outros sites. De vez em quando puxo algo da
                  estante para ler, e estes são os sortudos escolhidos:
                </p>
                <ul class="list-unstyled d-flex gap-2 flex-wrap justify-content-center justify-content-md-start m-0">
                  <li>
                    <a target="_blank" href="https://a.co/d/ckfE2fz" class="d-block grow-on-hover"
                      ><img
                        src="/src/imgs/books/51TgheB19FL._SL1050_.jpg"
                        alt="Capa do livro A coragem de NÃO agradar"
                        class="img-thumbnail border rounded border-primary-on-hover"
                    /></a>
                  </li>
                </ul>
              </div>
            </section>
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
    <script src="/src/js/dev-tools.js"></script>
    <script src="/src/js/posts-fetcher.js"></script>
  </body>
</html>
