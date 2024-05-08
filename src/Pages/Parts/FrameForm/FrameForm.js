import React, { useEffect, useState } from 'react'
import { getData, postData, putData } from '../../../Utils/main_functions'
import { useParams, useNavigate } from 'react-router-dom'

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
        <>
            <form onSubmit={submitHandler}>
                <input type='text' value={name} onChange={nameHandler}></input>
                <input type='number' value={weight} onChange={weightHandler}></input>
                <input type='text' value={img} onChange={imgHandler}></input>
                <button type='submit'>{id ? 'Submit Edit' : 'Add Part'}</button>
            </form>
        </>
    )
}

export default FrameForm