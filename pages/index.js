import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sample Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Sample <a href="https://nextjs.org">Next.js</a> App!
        </h1>
        <p>🖥️💖☕ by <a href="https://www.linkedin.com/in/dixit-rathi-6a1826232/">Dixit Rathi</a></p>
      </main>
    </div>
  )
}
