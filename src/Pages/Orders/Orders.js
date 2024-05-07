import { React, useState, useEffect } from 'react'
import { getData } from '../../Utils/main_functions'
import banner from '../../Images/banner.png'
import OrderList from '../../Components/OrderList/OrderList'
import { Link } from 'react-router-dom'

function Orders() {

    const [orders, setOrders] = useState([])

    useEffect(() => {

        const getOrders = async () => {
            const arr = await getData('/orders')
            setOrders(arr)
        }

        getOrders()

    }, [])

    return (
        <main>
            <img src={banner} alt='Banner Image'></img>
            <Link className='basic-button' to='/orders/form'>Make an Order</Link>
            {orders.length > 0 ? (<OrderList list={orders} />) : 'Loading orders...'}
        </main>
    )
}

export default Orders