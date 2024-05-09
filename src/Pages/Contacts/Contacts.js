import React from 'react'
import banner from '../../Images/banner.png'
import Card from '../../Components/Card/Card'

function Contacts() {
    return (
        <main>
            <Card>
                <div className='basic-column-flex'>
                    <h2>Company Name: Volt Customs</h2>
                    <span>Address: Upės g. 21, LT-08128 Vilnius</span>
                    <span>Company code: 304232351</span>
                    <span>Telephone number: 000 0000</span>
                </div>
            </Card>
        </main>
    )
}

export default Contacts