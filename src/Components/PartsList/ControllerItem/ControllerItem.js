import React from 'react'
import { deleteData } from '../../../Utils/main_functions'
import { Link } from 'react-router-dom'
import styles from '../Item.module.css'

function ControllerItem({ item, buttons }) {

    const deleteHandler = () => {
        deleteData('/controllers/' + item.id)
        window.location.reload();
    }

    return (
        <div className={styles.itemWrap}>
            <span>
                {`${item.name} | ${item.voltage}V | ${item.power}W | ${item.weight}kg`}
                {buttons && (
                    <>
                        <button onClick={deleteHandler} className='negative-button'>Delete</button>
                        <Link className='basic-button' to={'/parts/controllerForm/' + item.id}>Edit</Link>
                    </>
                )}
            </span>
        </div>
    )
}

export default ControllerItem