import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { use, useState } from 'react'
import Arrow from '@/components/Card/index'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    const [userfirstName, setFirstName] = useState('');
    const [userlastName, setLastName] = useState('');
    const [useremail, setEmail] = useState('');
    const placeholderFirst = "First name here";
    const placeholderLast = "Last name here"
    const placeholderEmail = "Email here"

    return (
        <>
            <Head>
                <meta name="author" content="MDIA 2109"></meta>
                <meta property="og:title" content="Assignment #1 - Contact Us Page" />
                <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
                <link rel="icon" href='/favicon.png' />
                <title>Contact Us</title>
            </Head>
            <main>
                <div>
                    <h1>Contact Us</h1>
                </div>
                <div>
                    <p>Want to discuss? Let's chat!</p>
                    <form className={styles.singleInput}>
                        <fieldset>
                            <table>
                                <thead>
                                    <tr>
                                        <th scope="col">First Name:</th>
                                        <th scope="col">Last Name:</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                required
                                                className={styles.formInput}
                                                placeholder="First Name Here"
                                            />
                                        </th>
                                        <th scope="row">
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                required
                                                className={styles.formInput}
                                                placeholder="Last Name Here"
                                            />
                                        </th>
                                    </tr>
                                </tbody>
                                <thead>
                                    <tr>
                                        <th scope="col">Email:</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            <input
                                                type="text"
                                                id="email"
                                                name="email"
                                                required
                                                className={styles.formInput}
                                                placeholder="Email Here"
                                            />
                                        </th>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <Link href="/"><button type="button">123</button></Link>
                                        </th>
                                    </tr>
                                </tbody>

                            </table>
                        </fieldset>
                    </form>
                </div>
                <Arrow page={"Contact"} />
            </main>

        </>
    )
}