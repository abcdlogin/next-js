import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
    <style>
    h1{
        color: lightseagreen;
    }
    h2{
        color: white
    }
    body{
        background-color: lightgreen;
        background-image: url('http://localhost:63342/MyselfProject/me.jpg');
        background-size: cover;
        background-repeat: no-repeat;
    }
    </style>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Home Page
        </h1>

        <h2>
            This is the home page of my site.
        </h2>
        </div>
      </main>
    </div>
  )
}
