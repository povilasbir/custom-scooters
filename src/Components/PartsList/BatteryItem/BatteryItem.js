import React, { useState, useEffect } from "react"
import { getData } from '../../../Utils/main_functions'
import { deleteData } from '../../../Utils/main_functions'
import { Link } from "react-router-dom"

function BatteryItem({ item }) {

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
        <div>
            <span>
                {item.name}
            </span>
            <span>
                {type.name && (type.name)}
            </span>
            <span>
                {item.voltage + 'V'}
            </span>
            <span>
                {item.capacity + 'Wh'}
            </span>
            <span>
                {item.weight + 'kg'}
            </span>
            <button onClick={deleteHandler} className='negative-button'>Delete</button>
            <Link className='basic-button' to={'/parts/batteryForm/' + item.id}>Edit</Link>
        </div>
    )
}

export default BatteryItem