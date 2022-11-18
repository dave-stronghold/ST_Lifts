import React from 'react'
import styles from './navbar.module.scss'
import { MdOutlineGridView } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <div className={styles.container} id="nav">
      <nav>
        <div className={styles.logocontainer}>
        <Link passHref href="/#hero">
          <a>
            <div className={styles.images}>
              <img src='./logo.png'/>
              <img src='./logotext.svg'/>
            </div>
          </a>
          </Link>
        </div>
        <ul>
          <li><Link passHref href="/#hero"><a isactive={router.asPath == "/#hero" ? "active" : ""}>Home</a></Link></li>
          <li><Link passHref href="/#about"><a isactive={router.asPath == "/#about" ? "active" : ""}>About</a></Link></li>
          <li><Link passHref href="/#products"><a isactive={router.asPath == "/#products" ? "active" : ""}>Products</a></Link></li>
          <li><Link passHref href="/#projects"><a isactive={router.asPath == "/#projects" ? "active" : ""}>Projects</a></Link></li>
          <li><Link passHref href="#contact"><a isactive={router.asPath == "#contact" ? "active" : ""}>Contact Us</a></Link></li>
          <li className={styles.gallery}><Link passHref href="/gallery#gallery"><a isactive={router.asPath == "/gallery#gallery" ? "active" : ""}><MdOutlineGridView />Gallery</a></Link></li>
        </ul>
      </nav>

    </div>
  )
}
