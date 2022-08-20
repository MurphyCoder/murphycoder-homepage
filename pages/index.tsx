import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>MurphyCoder | Home</title>
        <meta
          name='description'
          content='Hola Mundo! Soy Brayan Murphy amante de las nuevas tecnologias.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://github.com/MurphyCoder'>MurphyCoder</a>
        </h1>

        <p className={styles.description}>
          {' '}
          <code className={styles.code}>
            Muy pronto nuevas novedades 🚀...{' '}
          </code>
        </p>

        <button> I'M READY</button>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          @Murphycoder
        </a>
      </footer>
    </div>
  );
};

export default Home;
