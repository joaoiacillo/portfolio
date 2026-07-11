import Link from "next/link";

export const Post = ({
  title,
  date,
  minutes,
  link,
}: {
  title: string;
  date: Date;
  minutes: number;
  link: string;
}) => (
  <Link
    href={link}
    className={
      "flex flex-col justify-between rounded-md rounded-br-2xl border border-white/30 p-4 text-start transition-[scale,background] hover:scale-102 hover:bg-white/2 active:scale-98 active:bg-white/5"
    }
    target={"_blank"}
  >
    <div>{title}</div>
    <div className={"text-end opacity-50"}>
      {date.toLocaleDateString("pt-BR")} - {minutes} minutos
    </div>
  </Link>
);
