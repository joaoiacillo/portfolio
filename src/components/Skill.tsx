import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export const Skill = ({
  icon,
  name,
}: {
  icon: IconDefinition | string;
  name: string;
}) => (
  <div
    className={
      "flex w-28 flex-col items-center rounded-md rounded-br-4xl bg-black p-3 text-white"
    }
  >
    <div className={"mb-2 flex h-8 w-8 items-center"}>
      {typeof icon === "string" ? (
        <Image src={icon} alt={""} width={32} height={32} />
      ) : (
        <FontAwesomeIcon icon={icon} width={32} />
      )}
    </div>

    <span>{name}</span>
  </div>
);
