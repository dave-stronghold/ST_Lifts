import styles from './product.module.scss'
import React from 'react'
import Rive from '@rive-app/react-canvas';

export default function Product() {
    return (
        <div className={styles.productcontainer} id='products'>
            <div className={styles.maincon}>
                <div className="title">
                    Our Products
                </div>
                <div className={styles.datacontainer}>
                    <div className={styles.descriptioncontainer}>
                        <img src='./flow.svg' />
                        <p>The following are different type of elevators,which can be manufactured and supplied by ST Lifts, based  on the requirement of clients.</p>
                    </div>
                    <div className={styles.liftcardscontainer}>
                        <div className="card-container">
                            <div className="assetContainer">
                            <Rive src="st_lifts_products.riv" artboard='Travelators' width={'168px'} height={'144px'} />
                            </div>
                            <div className="tsf">Travelators</div>
                        </div>
                        <div className="card-container">
                            <div className="assetContainer">
                            <Rive src="st_lifts_products.riv" artboard='Car Parking Lifts' width={'168px'} height={'144px'} />
                            </div>
                            <div className="tsf">Car Parking Lifts</div>
                        </div>
                        <div className="card-container">
                            <div className="assetContainer">
                            <Rive src="st_lifts_products.riv" artboard='glasslifts' width={'168px'} height={'144px'} />
                            </div>
                            <div className="tsf">Glasslifts</div>
                        </div>
                        <div className="card-container">
                            <div className="assetContainer">
                            <Rive src="st_lifts_products.riv" artboard='Dumbwaiters' width={'168px'} height={'144px'} />
                            </div>
                            <div className="tsf">Dumbwaiters</div>
                        </div>
                        <div className="card-container">
                            <div className="assetContainer">
                            <Rive src="st_lifts_products.riv" artboard='Escalators' width={'168px'} height={'144px'} />
                            </div>
                            <div className="tsf">Escalators</div>
                        </div>
                        
                       
                       
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
