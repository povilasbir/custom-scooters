import React, { useState, useEffect } from "react"
import { getData } from '../../../Utils/main_functions'
import { deleteData } from '../../../Utils/main_functions'
import { Link } from "react-router-dom"
import styles from '../Item.module.css'

function BatteryItem({ item, buttons }) {

    const [type, setType] = useState('')

    const deleteHandler = () => {
        deleteData('/batteries/' + item.id)
        window.location.reload();
    }

    useEffect(() => {
        const getType = async () => {
            const typeData = await getData('/types/' + item.typeId)
            setType(typeData)
        }

        getType()
    }, [])

    return (
        <div className={styles.itemWrap}>
            <span>
                {`${item.name} | ${type.name && (type.name)} | ${item.voltage}V | ${item.capacity}Wh | ${item.weight}kg`}
                {buttons && (
                    <>
                        <button onClick={deleteHandler} className='negative-button'>Delete</button>
                        <Link className='basic-button' to={'/parts/batteryForm/' + item.id}>Edit</Link>
                    </>
                )}
            </span>
        </div>
    )
}

export default BatteryItem