import React from 'react'
import { deleteData } from '../../../Utils/main_functions'
import { Link } from 'react-router-dom'

function MotorItem({ item }) {

    const deleteHandler = () => {
        deleteData('/motors/' + item.id)
        window.location.reload();
    }

    return (
        <div>
            <span>
                {item.name}
            </span>
            <span>
                {item.maxVoltage + 'V Rated'}
            </span>
            <span>
                {item.power + 'W'}
            </span>
            <span>
                {item.weight + 'kg'}
            </span>
            <button onClick={deleteHandler} className='negative-button'>Delete</button>
            <Link className='basic-button' to={'/parts/motorForm/' + item.id}>Edit</Link>
        </div>
    )
}

export default MotorItem