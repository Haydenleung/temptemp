import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import aboutstyles from '@/styles/About.module.css'
import Arrow from '@/components/Card/index'
import Menu from '@/components/Card/Menupop'
import { useState, useEffect } from 'react';
import data from '../data/words.json'
import React from 'react';


const inter = Inter({ subsets: ['latin'] })

export default function About() {

    const [information, setInformation] = useState([...data]);
    const [number, setNumber] = useState(0);
    useEffect(() => {
        if (number === 6) {
            setNumber(0);
        } else if (number === -1) {
            setNumber(5);
        }
        information && information.map((info) => {
            if (info.id == number) {
                document.getElementById("testOnImageHere").innerText = info.value;
                document.getElementById("mainImage").src = "/carousel-images/" + info.id + ".jpg";
            }
        })
    })
    return (
        <>
            <Head>
                <meta name="author" content="MDIA 2109"></meta>
                <meta property="og:title" content="Assignment #1 - About Us Page" />
                <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
                <link rel="icon" href='/favicon.png' />
                <title>About Us</title>
            </Head>

            <main className={aboutstyles.main}>
                <header className={styles.navbar}>
                    <Menu />
                    <img src={'icons/graduation-hat.png'} width="60px"></img>
                </header>
                <div className={aboutstyles.pageContent}>
                    <div className={aboutstyles.pageTitleContainer}>
                        <hr className={aboutstyles.pageLine} />
                        <h1 className={aboutstyles.pageTitle}>About Us</h1>
                        <hr className={aboutstyles.pageLine} />
                    </div>
                    <div className={aboutstyles.pageBody}>
                        <p>We are proud to deliver an education that goes beyond textbooks and classrooms.</p>
                        <p>Our students gain the technical skills, real-world experience, and problem-solving ability needed to embrace complexity and lead innovation in a rapidly changing workforce.</p>
                        <p>Through close collaboration with industry, our network of alumni and partners continue to achieve global success.</p>
                        <h2>Information Sessions</h2>
                        <p>Information Sessions are a simple way to figure out the next step along your career path. Learn more about the programs that interest you.</p>
                        <h3>Big Info</h3>
                        <p>Big Info is the largest program expo and information session at BCIT. It's your chance to find out about all our programs - from business, computing and health to engineering, trades, and applied sciences.</p>
                        <p>If you missed our fall event the next Big Info is scheduled to return on February 15, 2023.</p>
                        <h2>Campus Tour</h2>
                        <p>Tours run weekdays September to May, on our Burnaby campus. See BCIT in person and get a taste of campus life.</p>
                    </div>
                    <div>
                        <div id="carouselImage" className={aboutstyles.carouselImage}>
                            <img id="mainImage" src={"/carousel-images/0.jpg"} />
                            <div className={aboutstyles.pageArrow}>
                                <img src={"/icons/leftArrow.png"} onClick={() => { setNumber(number - 1) }} />
                                <div id="testOnImageHere" className={aboutstyles.testOnImageHere}></div>
                                <img src={"/icons/rightArrow.png"} onClick={() => { setNumber(number + 1) }} />
                            </div>
                        </div>
                    </div>

                    <div className={aboutstyles.pageTitleContainer}>
                        <hr className={aboutstyles.pageLine} />
                        <h1 className={aboutstyles.pageTitle}>DEPARTMENTS</h1>
                        <hr className={aboutstyles.pageLine} />
                    </div>
                    <div className={aboutstyles.pageList}>
                        <ul>
                            <li>Applied & Natural Sciences</li>
                            <li>Business & Media</li>
                            <li>Computing & IT</li>
                            <li>Engineering</li>
                            <li>Health Sciences</li>
                            <li>Trades & Apprenticeships</li>
                        </ul>
                    </div>
                </div>
                <Arrow page={"About"} />
            </main>
        </>
    )
}
