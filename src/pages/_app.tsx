import { Roboto_Slab } from "@next/font/google";

import "@/assets/css/globals.css";
import type { AppProps } from "next/app";

const roboto = Roboto_Slab({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {`
          :root {
            --font-roboto: ${roboto.style.fontFamily};
          }
        `}
      </style>
    </>
  );
}
