import TextimonialsCard from "./TextimonialsCard";
import {clients} from '../data/Dishes.js';
import {motion} from 'framer-motion';
import { useEffect, useRef, useState } from "react";

const Testimonials = () => {

    const [width, setWidth] = useState(0);
    const carousel = useRef(0);

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, [])

    return (
        <section className="w-screen h-fit bg-color-1 mt-[40px] py-[30px]">
            <h1 className="font-Marzaki text-4xl text-center w-full mt-3 text-white">Our Happy Customers</h1>
            <motion.div className="flex items-center justify-center w-full">
                <motion.div ref={carousel} className="flex w-[375px] md:w-[1200px] overflow-hidden">
                    <motion.div drag='x' dragConstraints={{right: 0, left: -width}} whileTap={{cursor: 'grabbing'}} className="flex gap-[160px] cursor-grab">
                        {
                            clients.map((client) => {
                                return (
                                    <TextimonialsCard key={client.index} />
                                )
                            })
                        }
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default Testimonials;
