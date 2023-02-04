import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'
import Arrow from '@/components/Card/index'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [arrow, setArrow] = useState('0');

  return (
    <>
      <Head>
        <meta name="author" content="MDIA 2109" />
        <meta property="og:title" content="Assignment #1 - Home Page" />
        <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
        <link rel="icon" href="/favicon.png" />
        <title>Home</title>
      </Head>
      <header className={styles.navbar}>
        <img src={'icons/menu-icon.png'} width="50px"></img>
        <img src={'icons/graduation-hat.png'} width="60px"></img>
      </header>
      <main className={styles.main}>
        <div className={styles.pageContent}>
          <h1 className={styles.pageTitle}>An investment in knowledge pays the best interest.</h1>
          <hr className={styles.pageLine} />
          <p className={styles.pageBody}>Different than a college or university, the British Columbia Institute of Technology offers practical, flexible, applied education with instructors who have direct, hands-on experience in their field.</p>
          <div className={styles.buttonList}>
            <a href="/about">
              <button className={styles.pageButton}>More About Us</button>
            </a>
            <a href="/contact">
              <button className={styles.pageButton}>Contact Us</button>
            </a>
          </div>
        </div>
        <Arrow page={"Home"} />
      </main>
    </>
  )
}
