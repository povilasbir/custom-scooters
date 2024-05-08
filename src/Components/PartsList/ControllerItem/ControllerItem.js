import React from 'react'
import { deleteData } from '../../../Utils/main_functions'
import { Link } from 'react-router-dom'

function ControllerItem({ item }) {

    const deleteHandler = () => {
        deleteData('/controllers/' + item.id)
        window.location.reload();
    }

    return (
        <div>
            <span>
                {item.name}
            </span>
            <span>
                {item.voltage + 'V'}
            </span>
            <span>
                {item.power + 'W'}
            </span>
            <span>
                {item.weight + 'kg'}
            </span>
            <button onClick={deleteHandler} className='negative-button'>Delete</button>
            <Link className='basic-button' to={'/parts/controllerForm/' + item.id}>Edit</Link>
        </div>
    )
}

export default ControllerItem