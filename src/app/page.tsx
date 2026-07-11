import {
  faBootstrap,
  faCss,
  faDocker,
  faGitAlt,
  faGithub,
  faJs,
  faLinux,
  faPhp,
  faPostgresql,
  faPython,
  faReact,
  faTailwindCss,
  faTypescript,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faExternalLink,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import gameMakerIcon from "@/assets/game-maker-icon.svg";
import nextIcon from "@/assets/next-icon.webp";
import pattern01 from "@/assets/pattern-01.png";
import { Badge } from "@/components/Badge";
import { CallToAction } from "@/components/CallToAction";
import { CircuitLines } from "@/components/CircuitLines";
import { Post } from "@/components/Post";
import { Posts } from "@/components/Posts";
import { Project } from "@/components/Project";
import { Skill } from "@/components/Skill";
import { SocialButtons } from "@/components/SocialButtons";
import { Heading2 } from "@/components/typography/Heading2";
import { Heading3 } from "@/components/typography/Heading3";
import { projects } from "@/projects";

export default function Home() {
  return (
    <>
      <main className={"flex flex-col gap-12"}>
        {/* Hero */}
        <section className={"pb- pt-32 pb-20"}>
          <div className={"font-display relative mx-auto mb-5 w-fit"}>
            <div className={"text-5xl lg:text-8xl"}>Desenvolvedor</div>
            <div className={"flex justify-between"}>
              <div className={"text-7xl lg:text-9xl"}>Web</div>
              <div
                className={
                  "-translate-y-2.5 opacity-75 lg:-translate-y-5 lg:text-2xl"
                }
              >
                FULL-STACK
              </div>
            </div>

            <CircuitLines
              className={
                "absolute right-0 bottom-0 w-[62%] lg:bottom-8 lg:w-[65%]"
              }
            />
          </div>

          <div className={"flex justify-center"}>
            <SocialButtons />
          </div>
        </section>

        {/* Sobre */}
        <section
          className={
            "relative mx-auto w-full max-w-400 overflow-hidden bg-cover py-8 text-center text-white lg:rounded-lg lg:rounded-br-4xl"
          }
          style={{ backgroundImage: `url(${pattern01.src})` }}
          id={"about"}
        >
          <div className={"absolute inset-0 bg-black/80"}></div>

          <div className="relative px-8">
            <Heading2
              className={
                "top-[50%] left-[-7.2vw] translate-y-[-50%] rotate-90 select-none lg:absolute lg:m-0 lg:text-[6vw]"
              }
            >
              Sobre
            </Heading2>

            <Heading2
              className={
                "top-[50%] right-[-7.2vw] hidden translate-y-[-50%] -rotate-90 select-none lg:absolute lg:m-0 lg:block lg:text-[6vw]"
              }
            >
              Sobre
            </Heading2>

            <div
              className={"mx-auto text-justify lg:w-150 lg:place-self-center"}
            >
              <p className={"mb-4"}>
                Prazer! Eu sou João Iacillo, um{" "}
                <strong>Desenvolvedor Web Full-Stack</strong>. Desde a minha
                infância eu tenho cultivado minha curiosidade por tecnologia e
                dedicado à maior parte da minha vida à web.
              </p>

              <p className={"mb-4"}>
                Estou aqui para trazer sempre a melhor experiência para os seus
                clientes e usuários. Sempre tendo como foco a criação de sites
                altamente responsivos e bem otimizados.
              </p>

              <p>
                No meu tempo livre, estudo novas técnicas e aprimoro meus
                conhecimentos para implementar as melhores práticas no
                desenvolvimento de websites.
              </p>
            </div>

            {/*<CallToAction href={"#projects"} invert>*/}
            {/*  Conheça meus Projetos*/}
            {/*</CallToAction>*/}
          </div>
        </section>

        {/* Projetos */}
        <section className={"text-center"} id={"projects"}>
          <Heading2>Meus Projetos</Heading2>

          <div
            className={
              "mx-auto flex max-w-450 grid-cols-3 flex-col gap-8 lg:grid"
            }
          >
            {projects.map((project) => (
              <Project key={project.id}>
                <Project.Type type={project.type} />

                {project.thumbnail && <Project.Image src={project.thumbnail} />}
                {project.repo && <Project.FakeImage repo={project.repo} />}

                <Project.Title>{project.name}</Project.Title>

                <Badge.List>
                  {project.badges?.map((type) => {
                    const BadgeElement = Badge[type];
                    return <BadgeElement key={type} />;
                  })}
                </Badge.List>

                <Project.Description>
                  {project.description}.
                </Project.Description>

                <Project.Points>
                  {project.points.map((point, index) => (
                    <li key={point}>
                      {point}
                      {index === project.points.length - 1 ? "." : ";"}
                    </li>
                  ))}
                </Project.Points>

                <div className={"flex-1"}></div>

                <div className={"flex flex-col-reverse gap-2 lg:flex-col"}>
                  {project.githubLink && (
                    <CallToAction href={project.githubLink} newTab invert>
                      <FontAwesomeIcon icon={faGithub} width={16} /> Código
                      Fonte
                    </CallToAction>
                  )}

                  {project.previewLink && (
                    <CallToAction href={project.previewLink} newTab>
                      <FontAwesomeIcon icon={faExternalLink} width={16} />
                      Acessar
                    </CallToAction>
                  )}
                </div>
              </Project>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className={"text-center"} id={"skills"}>
          <Heading2>Minhas Skills</Heading2>

          <div className={"flex flex-col gap-4"}>
            <div>
              <Heading3>Linguagens</Heading3>

              <div className={"flex flex-wrap justify-center gap-2"}>
                <Skill icon={faTypescript} name={"TypeScript"} />
                <Skill icon={faJs} name={"JavaScript"} />
                <Skill icon={faCss} name={"CSS"} />
                <Skill icon={faPhp} name={"PHP"} />
                <Skill icon={faPython} name={"Python"} />
              </div>
            </div>

            <div>
              <Heading3>Bibliotecas</Heading3>

              <div className={"flex flex-wrap justify-center gap-2"}>
                <Skill icon={nextIcon.src} name={"Next.js"} />
                <Skill icon={faReact} name={"React"} />
                <Skill icon={faTailwindCss} name={"Tailwind"} />
                <Skill icon={faBootstrap} name={"Bootstrap"} />
              </div>
            </div>

            <div>
              <Heading3>Ferramentas</Heading3>

              <div className={"flex flex-wrap justify-center gap-2"}>
                <Skill icon={faDocker} name={"Docker"} />
                <Skill icon={faLinux} name={"Linux"} />
                <Skill icon={faGitAlt} name={"Git"} />
                <Skill icon={faGithub} name={"GitHub"} />
                <Skill icon={gameMakerIcon.src} name={"GameMaker"} />
              </div>
            </div>

            <div>
              <Heading3>Banco de Dados</Heading3>

              <div className={"flex flex-wrap justify-center gap-2"}>
                <Skill icon={faPostgresql} name={"Postgres"} />
                <Skill icon={faDatabase} name={"MySQL"} />
              </div>
            </div>
          </div>
        </section>

        <section
          className={"mx-auto w-full max-w-200 px-8 text-center"}
          id={"posts"}
        >
          <Heading2>Meus Posts</Heading2>

          <Posts />
        </section>

        {/* Contact */}
        <section className="text-center" id={"contact"}>
          <Heading2>Entre em Contato</Heading2>
          <SocialButtons />

          <form
            className={"mx-auto mt-8 flex max-w-150 flex-col gap-4 px-10"}
            action={"https://formsubmit.co/joao@iacillo.dev.br"}
            method={"POST"}
          >
            <input
              type="hidden"
              name="_subject"
              value={"Mensagem vinda do portfolio!"}
            />

            <input type="hidden" name="_template" value="table" />

            <input type="hidden" name="_captcha" value="false" />

            <input
              type={"text"}
              className={
                "rounded-lg rounded-br-4xl border border-white/20 px-8 py-4"
              }
              placeholder={"Qual seu nome?"}
              name={"name"}
              required
            />

            <input
              type={"email"}
              className={
                "rounded-lg rounded-br-4xl border border-white/20 px-8 py-4"
              }
              placeholder={"Qual seu e-mail?"}
              name={"email"}
              required
            />

            <textarea
              className={
                "resize-none rounded-lg rounded-br-4xl border border-white/20 px-8 py-4"
              }
              placeholder={"Escreva sua mensagem aqui"}
              rows={6}
              name={"message"}
              required
            ></textarea>

            <input
              type="submit"
              value="Enviar"
              className={
                "relative inline-block w-full cursor-pointer overflow-hidden rounded-lg rounded-br-4xl bg-white px-12 py-6 font-bold text-black transition-[background,scale] active:scale-95"
              }
            />
          </form>
        </section>
      </main>

      <footer className={"py-20 text-center"}>
        <div>João Iacillo &copy; {new Date().getFullYear()}</div>
      </footer>
    </>
  );
}
