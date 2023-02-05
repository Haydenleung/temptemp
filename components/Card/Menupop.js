import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'

export default function Menu({

}) {

    const [popup, setPopup] = useState(false);

    return (
        <section>
            <img className={styles.humburger} onClick={() => setPopup(true)} src={'icons/menu-icon.png'}></img>
            {
                popup === true ?
                    <div className={styles.menu}>
                        <img className={styles.menuImage} src="background-images/menuBackground.png"></img>
                        <h1 onClick={() => setPopup(false)}>X</h1>
                        <ul className={styles.list}>
                            <Link href="/"><li className={styles.item}>Home</li></Link>
                            <Link href="/about"><li className={styles.item}>About</li></Link>
                            <Link href="/contact"><li className={styles.item}>Contact</li></Link>
                        </ul>
                    </div>
                    : <></>
            }
        </section>
    )
}