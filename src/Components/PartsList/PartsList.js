import React from 'react'
import Card from '../Card/Card'
import FrameItem from './FrameItem/FrameItem'
import BatteryItem from './BatteryItem/BatteryItem'
import ControllerItem from './ControllerItem/ControllerItem'
import MotorItem from './MotorItem/MotorItem'

function PartsList({ list, partName }) {
    return (
        <Card>
            {list.length > 0 ? (list.map(item => {
                switch (partName) {
                    case 'frame':
                        return <FrameItem key={item.id} item={item} />
                    case 'battery':
                        return <BatteryItem key={item.id} item={item} />
                    case 'controller':
                        return <ControllerItem key={item.id} item={item} />
                    case 'motor':
                        return <MotorItem key={item.id} item={item} />
                }
            })) : 'Loading parts...'}
        </Card>
    )
}

export default PartsList