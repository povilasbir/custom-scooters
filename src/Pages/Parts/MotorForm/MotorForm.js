import React, { useEffect, useState } from 'react'
import { getData, postData, putData } from '../../../Utils/main_functions'
import { useParams, useNavigate } from 'react-router-dom'
import styles from '../Form.module.css';
import Card from '../../../Components/Card/Card';

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
        <main>
            <Card>
                <form className={styles.orderForm} onSubmit={submitHandler}>

                    <label htmlFor='name'>Part Name</label>
                    <input id='name' name='name' type='text' value={name} onChange={nameHandler} required></input>

                    <label htmlFor='voltage'>Rated Voltage</label>
                    <input id='voltage' name='voltage' type='number' value={voltage} onChange={voltageHandler} required></input>

                    <label htmlFor='power'>Power</label>
                    <input id='power' name='power' type='number' value={power} onChange={powerHandler} required></input>

                    <label htmlFor='weight'>Weight</label>
                    <input id='weight' name='weight' type='number' value={weight} onChange={weightHandler} required></input>

                    <button type='submit'>{id ? 'Submit Edit' : 'Add Part'}</button>
                </form>
            </Card>
        </main>
    )
}

export default MotorForm