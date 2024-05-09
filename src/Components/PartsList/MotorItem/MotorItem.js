import React from 'react'
import { deleteData } from '../../../Utils/main_functions'
import { Link } from 'react-router-dom'
import styles from '../Item.module.css'

function MotorItem({ item, buttons }) {

    const deleteHandler = () => {
        deleteData('/motors/' + item.id)
        window.location.reload();
    }

    return (
        <div className={styles.itemWrap}>
            <span>
                {`${item.name} | ${item.maxVoltage}V Rated | ${item.power}W | ${item.weight}kg`}
                {buttons && (
                    <>
                        <button onClick={deleteHandler} className='negative-button'>Delete</button>
                        <Link className='basic-button' to={'/parts/motorForm/' + item.id}>Edit</Link>
                    </>
                )}
            </span>
        </div>
    )
}

export default MotorItem