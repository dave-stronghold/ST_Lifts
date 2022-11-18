import React from 'react'
import styles from './hero.module.scss'
import { useRouter } from 'next/router'

export default function Hero() {
    const router=useRouter()
    const handleclick=()=>{
        router.push('#contact')
    }
    return (
        <div id='hero' className={styles.container}>
            <div className={styles.hero}>
                <div className={styles.quotecontainer}>
                    <h1>
                        There is always a room for an Elevator.
                    </h1>
                    <p>Elevate your Business with ST Lifts. Get your desired product with the help of our team that fits your needs.</p>
                    <button onClick={handleclick}>Get Quote</button>
                </div>
                <img src="./asset1.svg" />
            </div>
        </div>
    )
}
