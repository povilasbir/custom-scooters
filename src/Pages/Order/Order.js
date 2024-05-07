import { React, useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getData } from '../../Utils/main_functions'
import Card from '../../Components/Card/Card';

function Order() {

    const { id } = useParams()

    const [build, setBuild] = useState({})
    const [front, setFront] = useState({})
    const [back, setBack] = useState({})

    useEffect(() => {
        const getBuildData = async () => {
            const build = await getData('/orders/' + id + '?_embed=frame&_embed=battery')

            const frontController = await getData('/controllers/' + build.front.controllerId)
            const backController = await getData('/controllers/' + build.back.controllerId)

            const frontMotor = await getData('/motors/' + build.front.motorId)
            const backMotor = await getData('/motors/' + build.back.motorId)

            setBuild(build)

            const tempFront = {
                controller: frontController,
                motor: frontMotor
            }

            const tempBack = {
                controller: backController,
                motor: backMotor
            }

            setFront(tempFront)
            setBack(tempBack)
        }

        getBuildData()
    }, [])

    return (
        <Card>
            {Object.keys(build).length > 0 ? (
                <div>
                    <img src={build.frame.img} alt='Frame Image' />
                    <span>{build.name}</span>
                    <div>
                        <h2>Part List</h2>
                    </div>
                    <Link to={'/orders/form/' + id}>Edit Order</Link>
                    <Link to={'/orders/delete/' + id}>Remove Order</Link>
                </div>
            ) : 'Loading...'}
        </Card>
    )
}

export default Order