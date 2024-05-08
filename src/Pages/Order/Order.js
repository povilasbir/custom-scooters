import { React, useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getData, deleteData } from '../../Utils/main_functions'
import Card from '../../Components/Card/Card';
import styles from './Order.module.css';

import FrameItem from '../../Components/PartsList/FrameItem/FrameItem';
import BatteryItem from '../../Components/PartsList/BatteryItem/BatteryItem';
import ControllerItem from '../../Components/PartsList/ControllerItem/ControllerItem';
import MotorItem from '../../Components/PartsList/MotorItem/MotorItem'

function Order() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [build, setBuild] = useState({})
    const [front, setFront] = useState({})
    const [back, setBack] = useState({})

    const deleteHandler = () => {
        deleteData('/orders/' + id)
        navigate('/orders')
    }

    useEffect(() => {
        const getBuildData = async () => {
            const build = await getData('/orders/' + id + '?_embed=frame&_embed=battery')

            const frontController = await getData('/controllers/' + build.front.controllerId)
            const backController = await getData('/controllers/' + build.back.controllerId)

            const frontMotor = await getData('/motors/' + build.front.motorId)
            const backMotor = await getData('/motors/' + build.back.motorId)

            setBuild(build)

            const tempFront = {
                controller: frontController,
                motor: frontMotor
            }

            const tempBack = {
                controller: backController,
                motor: backMotor
            }

            setFront(tempFront)
            setBack(tempBack)
        }

        getBuildData()
    }, [])

    return (
        <main>
            <Card>
                {Object.keys(build).length > 0 ? (
                    <div className={styles.orderCard}>
                        <img src={build.frame.img} alt='Frame Image' />
                        <h2>{build.name}</h2>
                        <div>
                            <h3>Part List</h3>
                            <FrameItem item={build.frame} />
                            <BatteryItem item={build.battery} />
                            {front.controller && <ControllerItem item={front.controller} />}
                            {front.motor && <MotorItem item={front.motor} />}
                            {back.controller && <ControllerItem item={back.controller} />}
                            {back.motor && <MotorItem item={back.motor} />}
                        </div>
                        <Link className='basic-button' to={'/orders/form/' + id}>Edit Order</Link>
                        <button className='negative-button' onClick={deleteHandler}>Remove Order</button>
                    </div>
                ) : 'Loading...'}
            </Card>
        </main>
    )
}

export default Order