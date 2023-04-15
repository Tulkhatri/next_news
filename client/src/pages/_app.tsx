import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Container } from 'react-bootstrap';
import style from '@/styles/App.module.css'
const inter = Inter({ subsets: ['latin'] });//this is used for google font it use for avery pages 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Head>
        <title>Next News</title>
        <meta name="description" content="Our news" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className={style.pageContainer}>
        <Component {...pageProps} />
      </Container>
    </div>
  )
}
