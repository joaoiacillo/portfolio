import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

export const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: "variable",
  subsets: ["latin"],
});

export const courbeSans = localFont({
  src: "./CourbeSans.otf",
  variable: "--font-courbe-sans",
});
