import React from 'react'
import styles from './homeproject.module.scss'
import { MdOutlineGridView } from "react-icons/md";
import { useRouter } from 'next/router'

function Projectcard(params) {
   
    return(
        <>
            <div className={styles.projectcard} >
                <h3 className={styles.title}>{params.title} </h3>
                <div className={styles.imagecontainer}>
                    <img src={params.image[0]}></img>
                    <img src={params.image[1]}></img>
                    <img src={params.image[2]}></img>
                </div>
                <div className={styles.description}>{params.description}</div>
            </div>
        </>
    )
}

export default function Homeproject() {
    const router=useRouter()
    const handleclick=()=>{
        router.push('/gallery#gallery')
    }
  return (
    <div className={styles.mastercontainer} id='projects' >
        <div className={styles.title1}>Our Projects So Far</div>
        <Projectcard title="Napa Valley, El salvador" image={['https://picsum.photos/1200/1320','https://picsum.photos/1200/1300','https://picsum.photos/1200/1310']} description="Male Life, us bearing waters years, fill hath set darkness sea us air together open that and multiply wherein yielding his shall first said.To doesn't every moveth divide great beast creeping and, yielding a replenish own in cattle gathering lights there Form may his subdue.Of. First make grass greater days a day form you'll divided appear. His us." />
        <Projectcard title="Somewhere, India" image={['https://picsum.photos/1210/1320','https://picsum.photos/1220/1300','https://picsum.photos/1230/1310']} description="Male Life, us bearing waters years, fill hath set darkness sea us air together open that and multiply wherein yielding his shall first said.To doesn't every moveth divide great beast creeping and, yielding a replenish own in cattle gathering lights there Form may his subdue.Of. First make grass greater days a day form you'll divided appear. His us." />
        <button onClick={handleclick} className={styles.but}><MdOutlineGridView />View All Projects</button>
    </div>
  )
}
