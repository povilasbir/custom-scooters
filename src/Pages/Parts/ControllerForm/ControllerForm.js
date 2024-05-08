import React, { useEffect, useState } from 'react'
import { getData, postData, putData } from '../../../Utils/main_functions'
import { useParams, useNavigate } from 'react-router-dom'

function ControllerForm() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [voltage, setVoltage] = useState('')
    const [power, setPower] = useState('')
    const [weight, setWeight] = useState('')

    const nameHandler = e => setName(e.target.value)
    const voltageHandler = e => setVoltage(e.target.value)
    const powerHandler = e => setPower(e.target.value)
    const weightHandler = e => setWeight(e.target.value)

    useEffect(() => {

        const getControllerData = async () => {
            const data = await getData('/controllers/' + id)

            setName(data.name)
            setVoltage(data.voltage)
            setPower(data.power)
            setWeight(data.weight)
        }

        if (id) {
            getControllerData()
        }
    }, [])

    const submitHandler = e => {
        e.preventDefault()

        const newController = {
            name: name,
            voltage: voltage,
            power: power,
            weight: weight
        }

        if (id) {
            putData('/controllers/' + id, newController)
        } else {
            postData('/controllers', newController)
        }

        navigate('/parts')
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <input type='text' value={name} onChange={nameHandler}></input>
                <input type='number' value={voltage} onChange={voltageHandler}></input>
                <input type='number' value={power} onChange={powerHandler}></input>
                <input type='number' value={weight} onChange={weightHandler}></input>
                <button type='submit'>{id ? 'Submit Edit' : 'Add Part'}</button>
            </form>
        </>
    )
}

export default ControllerForm