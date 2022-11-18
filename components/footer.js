import React from 'react';
import styles from './footer.module.scss'

export default function Footer() {
  return (
    <div className={styles.footercontainer}>
        All rights reserved     |  ST Lifts {new Date().getFullYear()}    | Made with   ❤️   by Cubeloop Interactive
    </div>
  )
}
