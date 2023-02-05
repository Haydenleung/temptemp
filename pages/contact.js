import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import contactstyles from '@/styles/Contact.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import Arrow from '@/components/Card/index'
import Menu from '@/components/Card/Menupop'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    const regex = new RegExp('^[A-Z]{1}[A-Za-z]*$');
    const regexemail = new RegExp('^[A-Za-z0-9]+@[A-Za-z0-9]+\\.[A-Za-z]{2,}$');

    useEffect(() => {
        console.log(formData.email);
        if (regex.test(formData.firstName)) {
            document.getElementById("firstError").innerText = "";
        } else if (formData.firstName == "") {
            document.getElementById("firstError").innerText = "";
        } else if (formData.firstName !== "" && regex.test(formData.firstName) == false) {
            document.getElementById("firstError").innerText = "First name error. First letter must be capital. Must use alphabets only.";
        };
        if (regex.test(formData.lastName)) {
            document.getElementById("lastError").innerText = "";
        } else if (formData.lastName == "") {
            document.getElementById("lastError").innerText = "";
        } else if (formData.lastName !== "" && regex.test(formData.lastName) == false) {
            document.getElementById("lastError").innerText = "Last name error. First letter must be capital. Must use alphabets only.";
        };
        if (regexemail.test(formData.email)) {
            document.getElementById("emailError").innerText = "";
        } else if (formData.email == "") {
            document.getElementById("emailError").innerText = "";
        } else if (formData.email !== "" && regexemail.test(formData.email) == false) {
            document.getElementById("emailError").innerText = "Email is invalid.";
        };
        if (regex.test(formData.firstName) && regex.test(formData.lastName) && regexemail.test(formData.email)) {
            document.getElementById("formButton").style.visibility = "visible";
        } else {
            document.getElementById("formButton").style.visibility = "hidden";
        }
    })

    return (
        <>
            <Head>
                <meta name="author" content="MDIA 2109"></meta>
                <meta property="og:title" content="Assignment #1 - Contact Us Page" />
                <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
                <link rel="icon" href='/favicon.png' />
                <title>Contact Us</title>
            </Head>
            <main className={contactstyles.main}>
                <header className={styles.navbar}>
                    <Menu />
                    <img src={'icons/graduation-hat.png'} width="60px"></img>
                </header>
                <div className={contactstyles.pageContent}>
                    <div className={contactstyles.pageTitleContainer}>
                        <hr className={contactstyles.pageLine} />
                        <h1 className={contactstyles.pageTitle}>Contact Us</h1>
                        <hr className={contactstyles.pageLine} />
                    </div>
                    <div className={contactstyles.pageBody}>
                        <p>Want to discuss? Let's chat!</p>
                        <form className={contactstyles.pageForm}>
                            <fieldset className={contactstyles.singleInput}>
                                <table className={contactstyles.singleTable}>
                                    <thead className={contactstyles.singleThead}>
                                        <tr>
                                            <th scope="col">First Name:</th>
                                            <th scope="col">Last Name:</th>
                                        </tr>
                                    </thead>
                                    <tbody className={contactstyles.singleThead}>
                                        <tr>
                                            <th scope="row">
                                                <input
                                                    type="text"
                                                    id="firstName"
                                                    name="firstName"
                                                    pattern="[A-Z]{1}[a-z]*"
                                                    required
                                                    className={contactstyles.formInputA}
                                                    placeholder="First Name Here"
                                                    onChange={(e => setFormData({ ...formData, firstName: e.target.value }))}
                                                />
                                            </th>
                                            <th scope="row">
                                                <input
                                                    type="text"
                                                    id="lastName"
                                                    name="lastName"
                                                    pattern=""
                                                    required
                                                    className={contactstyles.formInputA}
                                                    placeholder="Last Name Here"
                                                    onChange={(e => setFormData({ ...formData, lastName: e.target.value }))}
                                                />
                                            </th>
                                        </tr>
                                    </tbody>
                                    <thead className={contactstyles.singleThead}>
                                        <tr>
                                            <th scope="col">Email:</th>
                                        </tr>
                                    </thead>
                                    <tbody className={contactstyles.singleThead}>
                                        <tr>
                                            <th scope="row">
                                                <input
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    pattern="^[A-Za-z0-9]+@[A-Za-z0-9]+\\.[A-Za-z]{2,}$"
                                                    required
                                                    className={contactstyles.formInputB}
                                                    placeholder="Email Here"
                                                    onChange={(e => setFormData({ ...formData, email: e.target.value }))}
                                                />
                                            </th>
                                        </tr>
                                    </tbody>

                                </table>
                            </fieldset>
                            <div className={contactstyles.buttonContainer}>
                                <Link href="/"><button id="formButton" className={contactstyles.button} type="button">Submit</button></Link>
                            </div>
                        </form>
                    </div>
                    <div className={contactstyles.errorContainer}>
                        <h3 id="firstError"></h3>
                        <h3 id="lastError"></h3>
                        <h3 id="emailError"></h3>
                    </div>
                    <Arrow page={"Contact"} />
                </div>
            </main>
        </>
    )
}