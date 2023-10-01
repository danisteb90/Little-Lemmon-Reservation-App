import React from 'react';
import bg_dishes from '../assets/img/Background2.png';
import DishCards from './DishCards';
import data from '../data/Dishes.js';
import MainButton from './MainButton';

const Dishes = () => {
    return (
        <section id='dishes' className='relative mt-[120px] md:mt-0'>
            <img src={bg_dishes} className='absolute top-0 left-0 w-full h-auto z-[-1] bg-white' />
            <div className='flex flex-col items-center justify-center w-full h-auto text-2xl'>
                <h2 className='font-bold text-color-1 mb-6 md:mb-10'>Our Best Dishes</h2>
                <div className='flex flex-col md:flex-row md:gap-[80px] gap-6'>
                    {
                        data.map((dish) =>{
                            return (
                                <DishCards
                                key = {dish.title}
                                img = {dish.img}
                                title = {dish.title}
                                text = {dish.text}
                            />
                            )
                        })
                    }
                </div>
                <MainButton
                bgcolor = "bg-color-2 hover:text-white hover:bg-color-1 mt-[40px] text-base"
                >
                Order Online
                </MainButton>
            </div>
        </section>
    );
}

export default Dishes;
