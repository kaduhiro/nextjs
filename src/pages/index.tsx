import { Inter } from "@next/font/google";
import Image from "next/image";

import { Logo } from "@/components/elements";
import { DefaultLayout } from "@/components/layouts";
import { Help } from "@/components/parts";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <DefaultLayout title="Create Next App">
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
          <Logo />
        </div>

        <div className={styles.center}>
          <Image
            className={"animate-slide-in-elliptic-top-fwd " + styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={"animate-bounce " + styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <Help />
    </DefaultLayout>
  );
}
