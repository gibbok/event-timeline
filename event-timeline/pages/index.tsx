import { initApp } from '@/configs/init';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Head from "next/head";

initApp()

export default function Home() {
  return (
    <>
      <Head>
        <title>Event Timeline</title>
        <meta name="description" content="Event Timeline on production line" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>hello</div>
      </main>
    </>
  );
}
