import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import {
  faCodepen,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Social = ({
  icon,
  title,
  href,
}: {
  icon: IconDefinition;
  title: string;
  href: string;
}) => (
  <li>
    <Link
      href={href}
      target={"_blank"}
      className={
        "flex items-center justify-center gap-1 rounded-lg rounded-br-2xl border border-white/20 px-5 py-3 transition-[background,scale] hover:scale-105 hover:bg-black/5 active:scale-95 active:bg-black/10"
      }
    >
      <FontAwesomeIcon icon={icon} width={16} />
      {title}
    </Link>
  </li>
);

export const SocialButtons = () => (
  <ul className={"inline-grid grid-cols-2 gap-2 lg:inline-flex"}>
    <Social
      icon={faGithub}
      title={"GitHub"}
      href={"https://github.com/joaoiacillo"}
    />

    <Social
      icon={faCodepen}
      title={"CodePen"}
      href={"https://codepen.io/iachilo"}
    />

    <Social
      icon={faLinkedin}
      title={"LinkedIn"}
      href={"https://www.linkedin.com/in/joaoiacillo/"}
    />

    <Social icon={faAt} title={"E-mail"} href={"mailto:joao@iacillo.dev.br"} />
  </ul>
);
