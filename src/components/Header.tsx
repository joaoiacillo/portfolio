"use client";

import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import {
  faAt,
  faBars,
  faFolder,
  faHome,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const NavItem = ({
  href,
  title,
}: {
  href: string;
  title: string;
  icon: IconDefinition;
}) => (
  <li>
    <a
      href={href}
      className={
        "block flex items-center gap-2 p-4 transition-[background,padding] active:bg-black/10 active:px-6"
      }
    >
      {title}
    </a>
  </li>
);

export const Header = () => (
  <header
    className={
      "bg-background relative sticky top-0 z-10 flex grid-cols-3 items-center justify-between border-b border-b-white/10 px-8 py-4 shadow"
    }
  >
    <Link href={"/"}>
      <h1 className={"text-xl font-bold"}>João Iacillo</h1>
    </Link>

    <label
      className={
        "peer block cursor-pointer gap-2 place-self-end rounded-full p-4 transition-[background,scale] active:scale-95 active:bg-black/10 has-checked:bg-black/20 lg:hidden"
      }
    >
      <input type="checkbox" className={"hidden"} />
      <FontAwesomeIcon icon={faBars} width={16} />
    </label>

    <nav
      className={
        "bg-background absolute top-full left-0 hidden not-lg:w-full not-lg:shadow peer-has-checked:block lg:relative lg:block"
      }
    >
      <ul className={"lg:inline-flex"}>
        <NavItem href={"/"} title={"Início"} icon={faHome} />
        <NavItem href={"#about"} title={"Sobre"} icon={faHome} />
        <NavItem href={"#projects"} title={"Projetos"} icon={faFolder} />
        <NavItem href={"#skills"} title={"Skills"} icon={faToolbox} />
        <NavItem href={"#posts"} title={"Posts"} icon={faToolbox} />
        <NavItem href={"#contact"} title={"Contato"} icon={faAt} />
      </ul>
    </nav>
  </header>
);
