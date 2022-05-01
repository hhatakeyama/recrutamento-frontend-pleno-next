import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Recrutamento frontend react pleno</title>
        <meta name="description" content="Recrutamento frontend react pleno" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem-vindo(a)!
        </h1>

        <p className={styles.description}>
          Siga as instruções que se encontram no arquivo README.md
          <br />
          para realizar o teste de proficiência frontend react pleno.
        </p>
      </main>

      <footer className={styles.footer}>
        Desenvolvido por{' '}
        Heitor Hatakeyama
      </footer>
    </div>
  )
}

export default Home
