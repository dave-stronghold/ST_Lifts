import React from 'react'
import styles from './about.module.scss'
import { MdAutoGraph, MdVerifiedUser, MdBusinessCenter, MdShareLocation, MdSettings, MdColorLens } from "react-icons/md"

export default function About() {
    return (
        <div id='about' className={styles.container}>
            <div>
                <div className={styles.illustration}>
                    <div>
                        <img src='./ill2.svg' />
                    </div>
                </div>
                <div className={styles.description}>
                    <div>
                        <div className={styles.title}>
                            Take a minute to know about Us
                        </div>
                        <div className={styles.paragraphcontainer}>

                            <p><h2><MdAutoGraph /></h2>
                                We have reached 7 years in the field of Elevators and Escalators. We are making our customers happy and satisfied with customized home Elevators.
                            </p>
                            <p><h2><MdVerifiedUser /></h2>
                                Meeting customers needs and expectation is our Motto.
                            </p>
                            <p><h2><MdBusinessCenter /></h2>
                                We execute our job in both Public and Private sectors.
                            </p>
                            <p><h2><MdShareLocation /></h2>
                                We have established our presence in Tiruchirapalli, Thanjavur, Guruvayur, Bengaluru, Mysore, Udupi, Tirupati, Vijayawada, Hyderabad and also in some parts of North India.
                            </p>
                            <p><h2><MdSettings /></h2>
                                We specialized and hospitalized our product for MRL Home Elevators with single-phase electric power and UPS operations for Emergency Situation running of maximum 6 calls (3 up and 3 down call operations).
                            </p>
                            <p><h2><MdColorLens /></h2>
                                We can supply Materials for all kind of elevators.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
