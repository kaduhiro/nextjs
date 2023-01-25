import { Roboto_Slab } from "@next/font/google";

import "@/assets/css/globals.css";
import { RecoilRoot } from "recoil";

import type { AppProps } from "next/app";

const roboto = Roboto_Slab({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />;
    </RecoilRoot>
  );
}
