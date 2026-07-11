import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import {
  faDocker,
  faGithub,
  faJava,
  faJs,
  faPostgresql,
  faPython,
  faReact,
  faTailwindCss,
  faTypescript,
} from "@fortawesome/free-brands-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { PropsWithChildren, ReactNode } from "react";

import gameMakerIcon from "@/assets/game-maker-icon.svg";
import nextIcon from "@/assets/next-icon.webp";
import tmdbIcon from "@/assets/tmdb-icon.png";
import { BadgeType } from "@/enums/BadgeType";

const createBadge = (icon: IconDefinition | string, name: string) => (
  <div
    className={
      "inline-flex items-center gap-2 rounded-sm rounded-br-2xl border px-3 py-2 text-sm"
    }
  >
    {typeof icon === "string" ? (
      <Image
        src={icon}
        alt={""}
        width={16}
        height={16}
        style={{ filter: "grayscale(100%)" }}
      />
    ) : (
      <FontAwesomeIcon icon={icon} width={16} />
    )}
    {name}
  </div>
);

const List = ({ children }: PropsWithChildren) => (
  <div className="mb-4 flex flex-wrap items-center gap-1">{children}</div>
);

export const Badge: { List: (props: PropsWithChildren) => ReactNode } & Record<
  BadgeType,
  () => ReactNode
> = {
  List,

  [BadgeType.TYPESCRIPT]: () => createBadge(faTypescript, "TypeScript"),
  [BadgeType.JAVASCRIPT]: () => createBadge(faJs, "JavaScript"),
  [BadgeType.PYTHON]: () => createBadge(faPython, "Python"),
  [BadgeType.JAVA]: () => createBadge(faJava, "Java"),

  [BadgeType.NEXT]: () => createBadge(nextIcon.src, "Next.js"),
  [BadgeType.REACT]: () => createBadge(faReact, "React"),
  [BadgeType.GAMEMAKER]: () => createBadge(gameMakerIcon.src, "GameMaker"),

  [BadgeType.TAILWIND]: () => createBadge(faTailwindCss, "Tailwind"),

  [BadgeType.DOCKER]: () => createBadge(faDocker, "Docker"),

  [BadgeType.POSTGRES]: () => createBadge(faPostgresql, "Postgres"),
  [BadgeType.MYSQL]: () => createBadge(faServer, "MySQL"),

  [BadgeType.TMDB]: () => createBadge(tmdbIcon.src, "TMDB"),
  [BadgeType.GITHUB_API]: () => createBadge(faGithub, "GitHub API"),
};
