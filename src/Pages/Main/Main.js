import { React, useState, useEffect } from 'react'
import { getData } from '../../Utils/main_functions'
import banner from '../../Images/banner.png'
import Card from '../../Components/Card/Card'
import paragraph_image from '../../Images/paragraph_image.png'
import paragraph_image_2 from '../../Images/paragraph_image_2.png'
import paragraph_image_3 from '../../Images/paragraph_image_3.avif'
import styles from './Main.module.css'

function Main() {

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
            <Card>
                <img className={styles.paragraphImage} src={paragraph_image} alt='Scooter Image' />
                <div>
                    <h2>Welcome to Volt Customs, where innovation meets mobility.</h2>
                    <p>
                        We are dedicated to revolutionizing the way you move with our bespoke electric scooters tailored to your lifestyle. As a pioneering force in the industry, we combine cutting-edge design with expert craftsmanship to deliver personalized solutions that redefine urban transportation. Whether you crave style, performance, or eco-consciousness, our team is committed to engineering the perfect ride for you. Join us on the journey towards a greener, sleeker future – one ride at a time.
                    </p>
                </div>
            </Card>
            <Card>
                <div>
                    <h2>We are currently working on {orders.length} projects.</h2>
                    <p>
                        Custom electric scooter manufacturing at Volt Customs is a seamless fusion of innovation, precision engineering, and individuality. Our process begins with a deep understanding of our clients' needs and preferences, ensuring that every scooter we produce is a true reflection of their personality and lifestyle. From concept to creation, our skilled team of designers, engineers, and craftsmen collaborate closely to translate ideas into reality, leveraging state-of-the-art technology and premium materials. Whether it's sleek aesthetics, high-performance features, or eco-friendly components, our commitment to excellence ensures that each scooter is meticulously crafted to exceed expectations. At Volt Customs, we don't just build scooters – we craft experiences that elevate urban mobility to new heights.
                    </p>
                </div>
                <img className={styles.paragraphImage} src={paragraph_image_2} alt='Scooter Image' />
            </Card>
            <Card>
                <img className={styles.paragraphImage} src={paragraph_image_3} alt='Scooter Image' />
                <div>
                    <h2>Highest quality parts.</h2>
                    <p>
                        At Volt Customs, we pride ourselves on the exceptional quality of every component used in assembling our electric scooters. Each part is meticulously selected for its durability, performance, and reliability, ensuring that every ride is not just a mode of transportation but a statement of excellence. From industry-leading motors and high-capacity batteries to precision-engineered frames and top-of-the-line braking systems, we spare no expense in sourcing the finest materials and components.
                    </p>
                </div>
            </Card>
        </main>
    )
}

export default Main