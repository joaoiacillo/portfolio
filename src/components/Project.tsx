import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { PropsWithChildren } from "react";

import pattern01 from "@/assets/pattern-01.png";

const ProjectType = ({ type }: { type: string }) => (
  <div
    className={
      "relative overflow-hidden rounded-lg rounded-b-none bg-black/20 bg-center py-2 text-center font-bold"
    }
    style={{ backgroundImage: `url(${pattern01.src})` }}
  >
    <div className={"absolute inset-0 bg-black/80"}></div>

    <span className={"relative"}>{type}</span>
  </div>
);

const ProjectImage = ({ src }: { src: string }) => (
  <Image
    src={src}
    width={887}
    height={382}
    alt={""}
    unoptimized={false}
    className={
      "mb-4 h-75 rounded-lg rounded-t-none rounded-br-4xl object-cover"
    }
  />
);

const ProjectFakeImage = ({ repo }: { repo: string }) => (
  <div
    className={
      "mb-4 grid h-75 w-full place-content-center rounded-lg rounded-t-none rounded-br-4xl border-2 border-black/10 select-none"
    }
  >
    <div className={"flex items-center gap-3"}>
      <FontAwesomeIcon icon={faGithub} width={64} />
      <span className={"text-xl opacity-75"}>/{repo}</span>
    </div>
  </div>
);

const ProjectTitle = ({ children }: PropsWithChildren) => (
  <h3 className={"mb-1 text-2xl font-medium"}>{children}</h3>
);

const ProjectDescription = ({ children }: PropsWithChildren) => (
  <p className={"mb-2"}>{children}</p>
);

const ProjectPoints = ({ children }: PropsWithChildren) => (
  <ul className={"mb-4 list-disc pl-3"}>{children}</ul>
);

export const Project = ({ children }: PropsWithChildren) => (
  <div className={"flex flex-col justify-start px-4 text-left"}>{children}</div>
);

Project.Type = ProjectType;
Project.Image = ProjectImage;
Project.FakeImage = ProjectFakeImage;
Project.Title = ProjectTitle;
Project.Description = ProjectDescription;
Project.Points = ProjectPoints;
