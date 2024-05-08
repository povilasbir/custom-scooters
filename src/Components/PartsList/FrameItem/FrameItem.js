import React from 'react'
import { deleteData } from '../../../Utils/main_functions'
import { Link } from 'react-router-dom'

function FrameItem({ item }) {

    const deleteHandler = () => {
        deleteData('/frames/' + item.id)
        window.location.reload();
    }

    return (
        <div>
            <span>
                {item.name}
            </span>
            <span>
                {item.weight + 'kg'}
            </span>
            <button onClick={deleteHandler} className='negative-button'>Delete</button>
            <Link className='basic-button' to={'/parts/frameForm/' + item.id}>Edit</Link>
        </div>
    )
}

export default FrameItem