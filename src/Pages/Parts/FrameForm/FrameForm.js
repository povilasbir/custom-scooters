import React, { useEffect, useState } from 'react'
import { getData, postData, putData } from '../../../Utils/main_functions'
import { useParams, useNavigate } from 'react-router-dom'
import Card from '../../../Components/Card/Card'
import styles from '../Form.module.css';

function FrameForm() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [weight, setWeight] = useState('')
    const [img, setImg] = useState('')

    const nameHandler = e => setName(e.target.value)
    const weightHandler = e => setWeight(e.target.value)
    const imgHandler = e => setImg(e.target.value)

    useEffect(() => {

        const getFrameData = async () => {
            const data = await getData('/frames/' + id)

            setName(data.name)
            setWeight(data.weight)
            setImg(data.img)
        }

        if (id) {
            getFrameData()
        }
    }, [])

    const submitHandler = e => {
        e.preventDefault()

        const newFrame = {
            name: name,
            weight: weight,
            img: img
        }

        if (id) {
            putData('/frames/' + id, newFrame)
        } else {
            postData('/frames', newFrame)
        }

        navigate('/parts')
    }

    return (
        <main>
            <Card>
                <form className={styles.orderForm} onSubmit={submitHandler}>

                    <label htmlFor='name'>Part Name</label>
                    <input id='name' name='name' type='text' value={name} onChange={nameHandler} required></input>

                    <label htmlFor='weight'>Part Weight</label>
                    <input id='weight' name='weight' type='number' value={weight} onChange={weightHandler} required></input>

                    <label htmlFor='img'>Image URL</label>
                    <input id='img' name='img' type='text' value={img} onChange={imgHandler}></input>

                    <button type='submit'>{id ? 'Submit Edit' : 'Add Part'}</button>
                </form>
            </Card>
        </main>
    )
}

export default FrameForm