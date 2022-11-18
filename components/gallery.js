import React,{useEffect} from 'react'
import styles from './gallery.module.scss'
function Card(params) {
    let a,b,c=0;
    useEffect(()=>{
        a=Math.random()*2+200
        b=Math.random()*4+200
        c=Math.random()*3+200

    },[a,b,c])
    return (<>
        <div className={styles.cardcontainer}>
            <div className={styles.title}>{params.title}</div>
            <div className={styles.imagecontainer}>
                <img src={`https://source.unsplash.com/random/1020x${Math.random()*5+210}`} className={styles.leftimage} />
                <div className={styles.twoimages}>
                    <img src={`https://source.unsplash.com/random/1040x${Math.random()*10+300}`}  />
                    <img src={`https://source.unsplash.com/random/1010x${Math.random()*15+400}`}  />
                </div>
            </div>
            <div className={styles.description}>{params.description}</div>
        </div>
    </>)
}
export default function Gallery() {
    return (
        <div className={styles.container} id='gallery'>

            <div className={styles.wrapper}>
                <div className={styles.track1}>
                    <Card title="West Pune" description="Male Life, us bearing waters years, fill hath set darkness sea us air together open that and multiply wherein yielding his shall first said.
To doesn't every moveth divide great beast creeping and, yielding a replenish own in cattle gathering" />
                    <Card title="Lonvala" description="Male Life, us bearing waters years, fill hath set darkness sea us air together open that and multiply wherein yielding his shall first said.
To doesn't every moveth divide great beast creeping and, yielding a replenish own in cattle gathering s bearing waters years, fill hath set darkness sea us air together open that and multiply wherein yielding his shall first said.
To doesn't every moveth divide great beast creeping and, yielding" />
                    <Card title="Kashmir" description="Male Life, us bearing waters years, fill hath set darkness sea us air together open that and multiply wherein yielding his shall first said.
To doesn't every moveth divide great beast creeping and, yielding a replenish own in cattle gathering" />
                </div>
                <div className={styles.track2}>
                <Card title="Sierra" description="Mag a replenish own in cattle gathering" />
                    <Card title="Nevada" description="Male Life, us bearing waters years, fill hath set darkness sea us air together open that and multiply wherein yielding his shall first said.
To doesn't every moveth divide great beast creeping and, yielding a replenish own in cattle gathering s bearing waters years, fill hath set darkness sea us air together open that and multiply wherein yielding his shall first said.
To doesn't every moveth divide great beast creeping and, yielding" />
                    <Card title="Swiss" description="Male Life, us bearing waters years, fill hath set darkness sea us air together open that and multiply wherein yielding his shall first said.
To doesn't every moveth divide great beast creeping and, yielding a replenish own in cattle gathering" />
                </div>
                <div className={styles.track3}>
                <Card title="Amsterdam" description="Male Life, us bearing waters years, fill hath set darkness sea us air together open that and multiply wherein yielding his shall first said.
To doesn't every moveth divide great beast creeping and, yielding a replenish own in cattle gathering" />
                    <Card title="Finland" description="Male Life, us bearing waters years, fill hath set darkness sea us air together open that and multiply wherein yielding his shall first said.
To doesn't every moveth divide great beast creeping and, yielding a replenish own in cattle gathering s bearing waters years, fill hath set darkness sea us air together open that and multiply wherein yielding his shall first said.
To doesn't every moveth divide great beast creeping and, yielding" />
                    <Card title="America" description="Male Life, us bearing waters years,g" />
                </div>
            </div>
        </div>
    )
}
