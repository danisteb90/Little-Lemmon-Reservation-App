import TextimonialsCard from "./TextimonialsCard";
import {clients} from '../data/Dishes.js';
import { useState } from "react";

const Testimonials = () => {

    const [index, setIndex] = useState(0);

    const slideLeft = () => {
        if(index - 1 >= 0) {
            setIndex(index - 1);
        }
    };

    const  slideRight = () => {
        if(index + 1 <= clients.length - 1) {
            setIndex(index + 1);
        }
    }

    return (
        <section id="testimonials" className="relative w-screen h-fit md:mt-[40px] py-[30px]">
            <h1 className="font-Marzaki text-4xl text-center w-full mt-3 text-color-1">Our Happy Customers</h1>
            <div onClick={slideRight} className="absolute top-[50%] right-[5%] z-10 text-4xl cursor-pointer">
                <ion-icon name="chevron-forward-sharp"></ion-icon>
            </div>
            <div onClick={slideLeft} className="absolute top-[50%] left-[5%] z-10 text-4xl cursor-pointer">
                <ion-icon name="chevron-back-sharp"></ion-icon>
            </div>
            <div className="flex">
                {
                    clients.map((client, n) => {
                        let position = n > index ? "nextCard" : n === index ? "activeCard" : "prevCard";
                        return (
                            <TextimonialsCard 
                                {...client}
                                cardStyle = {position}
                                key={client.id}
                            />
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Testimonials;


{/*
                Carousel with DRAG option
                const [width, setWidth] = useState(0);
                const carousel = useRef(0);

                useEffect(() => {
                    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
                }, [])

            <motion.div className="flex items-center justify-center w-full">
                <motion.div ref={carousel} className="flex w-[375px] md:w-[800px] overflow-hidden">
                    <motion.div drag='x' dragConstraints={{right: 0, left: -width}} whileTap={{cursor: 'grabbing'}} className="flex gap-[160px] cursor-grab">
                        {
                            clients.map((client) => {
                                return (
                                    <TextimonialsCard
                                        {...client}
                                    />
                                )
                            })
                        }
                    </motion.div>
                </motion.div>
            </motion.div>*/}