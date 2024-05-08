import React, { useEffect, useState } from 'react'
import { getData, postData, putData } from '../../../Utils/main_functions'
import { useParams, useNavigate } from 'react-router-dom'

function MotorForm() {

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

        const getMotorData = async () => {
            const data = await getData('/motors/' + id)

            setName(data.name)
            setVoltage(data.maxVoltage)
            setPower(data.power)
            setWeight(data.weight)
        }

        if (id) {
            getMotorData()
        }
    }, [])

    const submitHandler = e => {
        e.preventDefault()

        const newMotor = {
            name: name,
            maxVoltage: voltage,
            power: power,
            weight: weight
        }

        if (id) {
            putData('/motors/' + id, newMotor)
        } else {
            postData('/motors', newMotor)
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

export default MotorForm