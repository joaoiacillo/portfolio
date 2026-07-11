import projectAllm from "@/assets/project-allm.png";
import projectDgd from "@/assets/project-dgd.png";
import projectHotelAlura from "@/assets/project-hotelalura.png";
import projectParanordle from "@/assets/project-paranordle.png";
import { BadgeType } from "@/enums/BadgeType";

export const projects: {
  id: string;
  type: "Website" | "Jogo" | "Ferramenta" | "Bot";
  name: string;
  description: string;
  points: string[];
  thumbnail?: string;
  repo?: string;
  previewLink?: string;
  githubLink?: string;
  badges?: BadgeType[];
}[] = [
  {
    id: "paranordle",
    type: "Website",

    name: "Paranordle",
    description:
      "Jogo diário de navegador baseado no universo de Ordem Paranormal: adivinhe personagens com base em características semelhantes e diferentes",

    points: [
      "Design próprio e característico",
      "Experiência otimizada em celulares",
    ],

    thumbnail: projectParanordle.src,
    previewLink: "https://paranordle.com.br",

    badges: [
      BadgeType.NEXT,
      BadgeType.REACT,
      BadgeType.TYPESCRIPT,
      BadgeType.TAILWIND,
      BadgeType.DOCKER,
      BadgeType.POSTGRES,
    ],
  },

  {
    id: "dgd",
    type: "Website",

    name: "Estáts. de Repositório do GitHub",
    description: "Aplicação web para pesquisa de repositórios no GitHub",

    thumbnail: projectDgd.src,
    points: [],

    previewLink: "https://dgd-git.vercel.app/",
    githubLink: "https://github.com/joaoiacillo/dgd-git",

    badges: [BadgeType.REACT, BadgeType.TYPESCRIPT, BadgeType.GITHUB_API],
  },

  {
    id: "allm",
    type: "Jogo",

    name: "A Lovely Musical Massacre",
    description:
      "Projeto final para o curso de iniciação em desenvolvimento de jogos com GameMaker da RIO.ON",

    thumbnail: projectAllm.src,
    points: [],

    previewLink: "https://iachilo.itch.io/almm",
    githubLink: "https://github.com/joaoiacillo/almm",

    badges: [BadgeType.GAMEMAKER],
  },

  {
    id: "hotelalura",
    type: "Ferramenta",

    name: "Gerenciador de Hóspedes e Reservas",
    description:
      "Plataforma nativa para cadastro e gerenciamento de hóspedes e reservas de hotel",

    thumbnail: projectHotelAlura.src,
    points: [
      "Persistência dos dados com banco de dados",
      "Filtros e botões de funções rápidas para melhor manuseio",
      "Cálculo automático de preço de hospedagens",
    ],

    githubLink: "https://github.com/joaoiacillo/one-challenge-jdbc",

    badges: [BadgeType.JAVA, BadgeType.MYSQL],
  },

  {
    id: "sedna",
    type: "Ferramenta",

    name: "Sedna",
    description: "Uma engine de histórias interativas para JavaScript",

    points: ["Rápida e leve (10kB)", "Plug & Play - Sem muita configuração"],

    previewLink: "https://github.com/joaoiacillo/sedna",
    githubLink: "https://github.com/joaoiacillo/sedna",
    repo: "sedna",

    badges: [BadgeType.JAVASCRIPT],
  },

  {
    id: "bluesky-movie-guesser",
    type: "Bot",

    name: "BlueSky Movie Guesser Bot",
    description: "Bot de adivinhação de filmes para o BlueSky",

    points: ["Utiliza a API do TMDB"],

    repo: "bsky-movie-guesser",
    previewLink: "https://bsky.app/profile/bskymovieguesser.iacillo.dev.br",
    githubLink: "https://github.com/joaoiacillo/bsky-movie-guesser",

    badges: [BadgeType.PYTHON, BadgeType.TMDB],
  },
];
