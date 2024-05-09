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
                    <span className='red-note'>Frames</span>
                    <PartsList list={frames} partName={'frame'} />
                    <Link className='basic-button' to='/parts/frameForm'>Add Part</Link>
                </div>
                <div>
                    <span className='green-note'>Batteries</span>
                    <PartsList list={batteries} partName={'battery'} />
                    <Link className='basic-button' to='/parts/batteryForm'>Add Part</Link>
                </div>
                <div>
                    <span className='purple-note'>Controllers</span>
                    <PartsList list={controllers} partName={'controller'} />
                    <Link className='basic-button' to='/parts/controllerForm'>Add Part</Link>
                </div>
                <div>
                    <span className='orange-note'>Motors</span>
                    <PartsList list={motors} partName={'motor'} />
                    <Link className='basic-button' to='/parts/MotorForm'>Add Part</Link>
                </div>
            </div>
        </main>
    )
}

export default Parts