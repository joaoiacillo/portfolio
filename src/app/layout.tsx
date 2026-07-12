import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import clsx from "clsx";
import type { Metadata } from "next";
import { PropsWithChildren } from "react";

import { Header } from "@/components/Header";
import { courbeSans, montserrat } from "@/fonts/fonts";

export const metadata: Metadata = {
  title: "João Iacillo",
  description: "Desenvolvedor Web Full-Stack",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="pt-BR"
      className={clsx(
        montserrat.variable,
        courbeSans.variable,
        "scroll-smooth",
      )}
    >
      <body className="bg-background text-foreground flex min-h-full flex-col antialiased">
        <Analytics />
        <Header />
        {children}
      </body>
    </html>
  );
}
