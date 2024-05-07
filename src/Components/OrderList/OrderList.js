import { React, useState, useEffect } from 'react'
import Card from '../Card/Card'
import OrderItem from '../OrderItem/OrderItem'
import styles from './OrderList.module.css'

function OrderList({ list }) {
    return (
        <Card>
            <div className={styles.listWrap}>
                {list ? (list.map(item => <OrderItem key={item.id} item={item} />)) : 'Nothing to display...'}
            </div>
        </Card>
    )
}

export default OrderList