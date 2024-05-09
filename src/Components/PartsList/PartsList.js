import React from 'react'
import Card from '../Card/Card'
import FrameItem from './FrameItem/FrameItem'
import BatteryItem from './BatteryItem/BatteryItem'
import ControllerItem from './ControllerItem/ControllerItem'
import MotorItem from './MotorItem/MotorItem'

function PartsList({ list, partName }) {
    return (
        <Card>
            <div>
                {list.length > 0 ? (list.map(item => {
                    switch (partName) {
                        case 'frame':
                            return <FrameItem buttons={true} key={item.id} item={item} />
                        case 'battery':
                            return <BatteryItem buttons={true} key={item.id} item={item} />
                        case 'controller':
                            return <ControllerItem buttons={true} key={item.id} item={item} />
                        case 'motor':
                            return <MotorItem buttons={true} key={item.id} item={item} />
                    }
                })) : 'Loading parts...'}
            </div>
        </Card>
    )
}

export default PartsList