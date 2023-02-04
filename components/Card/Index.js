import styles from '@/styles/Home.module.css'
import aboutstyles from '@/styles/About.module.css'
import contactstyles from '@/styles/Contact.module.css'

export default function Arrow({
    page = "Home",
}) {
    return (
        page === "Home" ?
            <div className={styles.pageArrow}>
                <a href="/about" ><span ><img src={'icons/downwardArrow.png'} /></span></a>
            </div> :
            page === "About" ?
                <div className={styles.pageArrow}>
                    <a href="/"><span ><img src={'icons/upwardArrow.png'} /></span></a>
                    <a href="/contact" ><span ><img src={'icons/downwardArrow.png'} /></span></a>
                </div> :
                page === "Contact" ?
                    <div className={styles.pageArrow}>
                        <a href="/about"><span ><img src={'icons/upwardArrow.png'} /></span></a>
                    </div> :
                    <div className={styles.pageArrow}>
                        <a href="/" ><span ><img src={'icons/downwardArrow.png'} /></span></a>
                    </div>
    )
}