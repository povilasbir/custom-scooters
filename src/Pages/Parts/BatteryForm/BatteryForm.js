import React, { useEffect, useState } from 'react'
import { getData, postData, putData } from '../../../Utils/main_functions'
import { useParams, useNavigate } from 'react-router-dom'

function BatteryForm() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [typeOpt, setTypeOpt] = useState([])

    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [voltage, setVoltage] = useState('')
    const [capacity, setCapacity] = useState('')
    const [weight, setWeight] = useState('')

    const nameHandler = e => setName(e.target.value)
    const typeHandler = e => setType(e.target.value + "")
    const voltageHandler = e => setVoltage(e.target.value)
    const capacityHandler = e => setCapacity(e.target.value)
    const weightHandler = e => setWeight(e.target.value)

    useEffect(() => {

        const getOptions = async () => {
            const opt = await getData('/types')

            setTypeOpt(opt)
            console.log(opt[0].id)
        }

        const getBatteryData = async () => {
            const data = await getData('/batteries/' + id)

            setName(data.name)
            setType(data.typeId)
            setVoltage(data.voltage)
            setCapacity(data.capacity)
            setWeight(data.weight)
        }

        getOptions()

        if (id) {
            getBatteryData()
        }

    }, [])

    const submitHandler = e => {
        e.preventDefault()

        const newBattery = {
            name: name,
            typeId: type,
            voltage: voltage,
            capacity: capacity,
            weight: weight
        }

        if (id) {
            putData('/batteries/' + id, newBattery)
        } else {
            postData('/batteries', newBattery)
        }

        navigate('/parts')
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <input type='text' value={name} onChange={nameHandler}></input>
                <select name='types' id='types' value={type} onChange={typeHandler}>
                    {typeOpt.length > 0 ? (
                        typeOpt.map(item => {
                            return <option key={item.id} value={item.id}>{item.name}</option>
                        })
                    ) : 'Loading types...'}
                </select>
                <input type='number' value={voltage} onChange={voltageHandler}></input>
                <input type='number' value={capacity} onChange={capacityHandler}></input>
                <input type='number' value={weight} onChange={weightHandler}></input>
                <button type='submit'>{id ? 'Submit Edit' : 'Add Part'}</button>
            </form>
        </>
    )
}

export default BatteryForm