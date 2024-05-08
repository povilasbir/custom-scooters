import React, { useEffect, useState } from 'react'
import { getData, postData, putData } from '../../Utils/main_functions'
import { useParams, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from '../../Components/Card/Card';
import styles from './OrderForm.module.css'

function OrderForm() {

    const { id } = useParams()
    const navigate = useNavigate()
    const notify = () => toast("Name, Frame, Battery fields should be filled. At least One Controller and One Motor must be selected.");

    const [frameList, setFrameList] = useState([])
    const [batteryList, setBatteryList] = useState([])
    const [controllerList, setControllerList] = useState([])
    const [motorList, setMotorList] = useState([])

    const [name, setName] = useState('')
    const [frame, setFrame] = useState('')
    const [battery, setBattery] = useState('')

    const [frontController, setFrontController] = useState('')
    const [backController, setBackController] = useState('')

    const [frontMotor, setFrontMotor] = useState('')
    const [backMotor, setBackMotor] = useState('')

    const nameHandler = e => setName(e.target.value)
    const frameHandler = e => setFrame(e.target.value)
    const batteryHandler = e => setBattery(e.target.value + "")
    const fcHandler = e => setFrontController(e.target.value + "")
    const bcHandler = e => setBackController(e.target.value + "")
    const fmHandler = e => setFrontMotor(e.target.value + "")
    const bmHandler = e => setBackMotor(e.target.value + "")

    useEffect(() => {
        const getOptions = async () => {
            const frameOpt = await getData('/frames')
            const batteryOpt = await getData('/batteries')
            const controllerOpt = await getData('/controllers')
            const motorOpt = await getData('/motors')

            setFrameList(frameOpt)
            setBatteryList(batteryOpt)
            setControllerList(controllerOpt)
            setMotorList(motorOpt)
        }

        const getBuildData = async () => {
            const data = await getData('/orders/' + id)

            setName(data.name)
            setFrame(data.frameId)
            setBattery(data.batteryId)
            setFrontController(data.front.controllerId)
            setBackController(data.back.controllerId)
            setFrontMotor(data.front.motorId)
            setBackMotor(data.back.motorId)
        }

        getOptions()

        if (id) {
            getBuildData()
        }

    }, [])

    const submitHandler = e => {
        e.preventDefault()

        if (!(name && frame && battery && ((frontController && frontMotor) || (backController && backMotor)))) {
            notify()
            return
        }

        const newBuild = {
            name: name,
            frameId: frame,
            batteryId: battery,
            front: {
                controllerId: frontController,
                motorId: frontMotor
            },
            back: {
                controllerId: backController,
                motorId: backMotor
            }
        }

        if (id) {
            putData('/orders/' + id, newBuild)
        } else {
            postData('/orders', newBuild)
        }

        navigate('/orders')
    }

    return (
        <main>
            <Card>
                <form className={styles.orderForm} onSubmit={submitHandler}>
                    <label htmlFor='name'>Build Name</label>
                    <input id='name' name='name' type='text' value={name} onChange={nameHandler} placeholder='Build Name'></input>

                    <label htmlFor='frames'>List of Frames</label>
                    <select name='frames' id='frames' value={frame} onChange={frameHandler}>
                        <option value=''>{'-- Select Frame --'}</option>
                        {frameList.length > 0 ? (
                            frameList.map(item => {
                                return <option key={item.id} value={item.id}>{item.name}</option>
                            })
                        ) : 'Loading types...'}
                    </select>

                    <label htmlFor='batteries'>List of Batteries</label>
                    <select name='batteries' id='batteries' value={battery} onChange={batteryHandler}>
                        <option value=''>{'-- Select Battery --'}</option>
                        {batteryList.length > 0 ? (
                            batteryList.map(item => {
                                return <option key={item.id} value={item.id}>{item.name}</option>
                            })
                        ) : 'Loading types...'}
                    </select>

                    <label htmlFor='front-controller'>Available front Controllers</label>
                    <select name='front-controller' id='front-controller' value={frontController} onChange={fcHandler}>
                        <option value=''>{'-- Select Front Controller --'}</option>
                        {controllerList.length > 0 ? (
                            controllerList.map(item => {
                                return <option key={item.id} value={item.id}>{item.name}</option>
                            })
                        ) : 'Loading types...'}
                    </select>

                    <label htmlFor='front-motor'>Available front Motors</label>
                    <select name='front-motor' id='front-motor' value={frontMotor} onChange={fmHandler}>
                        <option value=''>{'-- Select Front Motor --'}</option>
                        {motorList.length > 0 ? (
                            motorList.map(item => {
                                return <option key={item.id} value={item.id}>{item.name}</option>
                            })
                        ) : 'Loading types...'}
                    </select>

                    <label htmlFor='back-controller'>Available rear Controllers</label>
                    <select name='back-controller' id='back-controller' value={backController} onChange={bcHandler}>
                        <option value=''>{'-- Select Rear Controller --'}</option>
                        {controllerList.length > 0 ? (
                            controllerList.map(item => {
                                return <option key={item.id} value={item.id}>{item.name}</option>
                            })
                        ) : 'Loading types...'}
                    </select>

                    <label htmlFor='back-motor'>Available rear Motors</label>
                    <select name='back-motor' id='back-motor' value={backMotor} onChange={bmHandler}>
                        <option value=''>{'-- Select Rear Motor --'}</option>
                        {motorList.length > 0 ? (
                            motorList.map(item => {
                                return <option key={item.id} value={item.id}>{item.name}</option>
                            })
                        ) : 'Loading types...'}
                    </select>

                    <button type='submit'>{id ? 'Submit Edit' : 'Add Part'}</button>
                </form>
                <ToastContainer />
            </Card>
        </main>
    )
}

export default OrderForm