import React, { useEffect, useState } from 'react'
import { getData } from '../../Utils/main_functions'
import styles from './OrderItem.module.css'
import { Link } from "react-router-dom"

function OrderItem({ item }) {

    const [img, setImg] = useState('')
    const [capacity, setCapacity] = useState('')
    const [power, setPower] = useState('')
    const [drive, setDrive] = useState('')

    useEffect(() => {
        const getBuildData = async () => {
            const frameData = await getData('/frames/' + item.frameId)
            const batteryData = await getData('/batteries/' + item.batteryId)

            let frontPower = 0
            let backPower = 0

            if (item.front.controllerId) {
                const frontControllerData = await getData('/controllers/' + item.front.controllerId)
                frontPower = Number(frontControllerData.power)
            }

            if (item.back.controllerId) {
                const backControllerData = await getData('/controllers/' + item.back.controllerId)
                backPower = Number(backControllerData.power)
            }

            setImg(frameData.img)
            setCapacity(batteryData.capacity)
            setPower(frontPower + backPower)

            let tempDrive

            if (backPower == 0) {
                tempDrive = 'Front Drive'
            } else if (frontPower == 0) {
                tempDrive = 'Rear Drive'
            } else {
                tempDrive = 'Both Wheel Drive'
            }

            setDrive(tempDrive)
        }

        getBuildData()
    }, [])

    return (
        <Link to={'/orders/' + item.id} className={styles.itemWrap}>
            <img src={img} alt='Build Image' />
            <span>{`${item.name} is a ${drive} ${power} Watt scooter with a ${capacity} Wh battery.`}</span>
        </Link>
    )
}

export default OrderItem