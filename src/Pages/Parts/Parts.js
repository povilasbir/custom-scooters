import { React, useState, useEffect } from 'react'
import { getData } from '../../Utils/main_functions'
import banner from '../../Images/banner.png'
import { Link } from 'react-router-dom'
import PartsList from '../../Components/PartsList/PartsList'
import styles from './Parts.module.css'

function Parts() {

    const [frames, setFrames] = useState([])
    const [batteries, setBatteries] = useState([])
    const [controllers, setControllers] = useState([])
    const [motors, setMotors] = useState([])

    useEffect(() => {

        const getPartsData = async () => {
            const tempFrames = await getData('/frames')
            const tempBatt = await getData('/batteries?_embed=type')
            const tempContr = await getData('/controllers')
            const tempMotors = await getData('/motors')

            setFrames(tempFrames)
            setBatteries(tempBatt)
            setControllers(tempContr)
            setMotors(tempMotors)
        }

        getPartsData()
    }, [])

    return (
        <main>
            <img src={banner} alt='Banner Image'></img>
            <div className={styles.partsListsWrap}>
                <div>
                    <Link className='basic-button' to='parts/frameForm'>Add Part</Link>
                    <PartsList list={frames} partName={'frame'} />
                </div>
                <div>
                    <Link className='basic-button' to='parts/batteryForm'>Add Part</Link>
                    <PartsList list={batteries} partName={'battery'} />
                </div>
                <div>
                    <Link className='basic-button' to='parts/controllerForm'>Add Part</Link>
                    <PartsList list={controllers} partName={'controller'} />
                </div>
                <div>
                    <Link className='basic-button' to='parts/MotorForm'>Add Part</Link>
                    <PartsList list={motors} partName={'motor'} />
                </div>
            </div>
        </main>
    )
}

export default Parts