import React from 'react'
import styles from './doors.module.scss'
import Rive from '@rive-app/react-canvas';


export default function Doors() {
  return (
    <div className={styles.doorscontainer}>
        <div className={styles.maincon}>
            <div className="title">Types of Doors</div>
            <div className={styles.doorscardcontainer}>
            <div className="card-container">
                            <div className="assetContainer">
                            <Rive src="st_lifts_doors.riv" artboard='automaticCenterOpeningDoors' width={'168px'} height={'144px'} />
                            </div>
                            <div className="tsf">Automatic center </div>
                        </div>
                        <div className="card-container">
                            <div className="assetContainer">
                            <Rive src="st_lifts_doors.riv" artboard='automaticTelescopicDoors' width={'168px'} height={'144px'} />
                            </div>
                            <div className="tsf">Auto Telescopic</div>
                        </div>
                        <div className="card-container">
                            <div className="assetContainer">
                            <Rive src="st_lifts_doors.riv" artboard='manualTelescopicDoors' width={'168px'} height={'144px'} />
                            </div>
                            <div className="tsf">Manual Telescopic </div>
                        </div>
                        <div className="card-container">
                            <div className="assetContainer">
                            <Rive src="st_lifts_doors.riv" artboard='manualSwingDoors' width={'168px'} height={'144px'} />
                            </div>
                            <div className="tsf">Manual swing doors</div>
                        </div>
            </div>
        </div>
    </div>
  )
}
