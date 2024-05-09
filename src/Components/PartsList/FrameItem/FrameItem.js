import React from 'react'
import { deleteData } from '../../../Utils/main_functions'
import { Link } from 'react-router-dom'
import styles from '../Item.module.css'

function FrameItem({ item, buttons }) {

    const deleteHandler = () => {
        deleteData('/frames/' + item.id)
        window.location.reload();
    }

    return (
        <div className={styles.itemWrap}>
            <span>
                {`${item.name} Weight:${item.weight}kg`}
                {buttons && (<><button onClick={deleteHandler} className='negative-button'>Delete</button>
                    <Link className='basic-button' to={'/parts/frameForm/' + item.id}>Edit</Link></>)}
            </span>
        </div>
    )
}

export default FrameItem