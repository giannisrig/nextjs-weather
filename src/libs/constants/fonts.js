import localFont from "next/font/local";
import { Noto_Sans_Mono } from "next/font/google";

//load the Google fonts
const noto_sans_mono = Noto_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-noto-sans-mono",
});

//load the local fonts
const grava = localFont({
  src: [
    {
      path: "../../../public/fonts/Grava Display Normal.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Grava Display Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Grava Display Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-grava",
});

//define the fonts object
const fonts = {
  grava: grava,
  notoSansMono: noto_sans_mono,
};

export default fonts;
