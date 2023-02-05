import { useEffect } from 'react';

import Image from 'next/image';
import { useRecoilState } from 'recoil';

import styles from '@/assets/css/Index.module.css';
import { Logo, Theme } from '@/components/elements';
import { DefaultLayout } from '@/components/layouts';
import { Help } from '@/components/parts';
import { counterState } from '@/states';

export default function Home() {
  const [counter, setCounter] = useRecoilState(counterState);

  useEffect(() => {
    setCounter({ count: counter.count + 1 });
  }, []);

  return (
    <DefaultLayout title={`Create Next App (${counter.count})`}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>pages/index.tsx</code>
        </p>
        <Logo />
        <Theme />
      </div>

      <div className={styles.center}>
        <Image
          className={'animate-slide-in-elliptic-top-fwd ' + styles.logo}
          src='/next.svg'
          alt='Next.js Logo'
          width={180}
          height={37}
          priority
        />
        <div className={'animate-bounce ' + styles.thirteen}>
          <Image src='/thirteen.svg' alt='13' width={40} height={31} priority />
        </div>
      </div>

      <Help />
    </DefaultLayout>
  );
}
