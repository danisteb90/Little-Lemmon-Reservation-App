import React from "react";
import { useState } from "react";
import Modal from "./Modal";

const Reservation = () => {

    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [people, setPeople] = useState('');
    const [occasion, setOccasion] = useState('');

    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        setShowModal(true);
        e.preventDefault();
    }

    return (
        <section id="reservations" className="w-full h-auto flex items-center justify-center pb-10">
            <div className="relative reservation-bg bg-cover bg-bottom md:w-[800px] md:h-[250px] w-[375px] h-[320px] rounded-2xl">
                <div className="absolute top-0 left-0 bg-color-1 rounded-2xl opacity-80 md:w-[800px] md:h-[250px] w-[375px] h-[320px] z-0"></div>
                <form onSubmit={handleSubmit} className="w-full flex md:flex-row flex-col items-center justify-center absolute md:top-20 top-5 z-10 text-sm gap-3">
                    <div className="flex flex-col items-center justify-center">
                        <label className="text-white font-bold">Name</label>
                        <input className="w-[200px] p-2 rounded-md border-2 border-color-2 focus:outline-none focus:ring-1 focus:ring-color-3" type="text" placeholder="Enter your name" required value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <label className="text-white font-bold">Choose Date</label>
                        <input className="w-[140px] p-2 rounded-md border-2 border-color-2 focus:outline-none focus:ring-1 focus:ring-color-3 text-gray-400" type="date" required value={date} onChange={(e) => setDate(e.target.value)}/>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <label className="text-white font-bold">Chose Time</label>
                        <select className="w-[100px] p-2 rounded-md border-2 border-color-2 focus:outline-none focus:ring-1 focus:ring-color-3 text-gray-400" type="time" required value={time} onChange={(e) => setTime(e.target.value)}>
                            <option>17:00</option>
                            <option>18:00</option>
                            <option>19:00</option>
                            <option>20:00</option>
                            <option>21:00</option>
                            <option>22:00</option>
                        </select>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <label className="text-white font-bold">Number of Guests</label>
                        <input className="w-[80px] p-2 rounded-md border-2 border-color-2 focus:outline-none focus:ring-1 focus:ring-color-3 text-gray-400" type="number" placeholder="1" min="1" max="10" required value={people} onChange={(e) => setPeople(e.target.value)} />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <label className="text-white font-bold">Occasion</label>
                        <select className="w-[150px] p-2 rounded-md border-2 border-color-2 focus:outline-none focus:ring-1 focus:ring-color-3 text-gray-400" required value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                            <option>Wedding</option>
                        </select>
                    </div>
                    <button type="submit" className="absolute md:top-[80px] top-[215px] left-[32%] md:left-[39%] text-black shadow-md py-3 px-4 rounded-md font-semibold md:ml-3 md:w-[150px] md:h-[50px] bg-color-2 mt-5 hover:scale-110 transition-all duration-200">Reserve Now</button>
                    <Modal
                    name={name}
                    date={date}
                    time={time}
                    people={people}
                    occasion={occasion}
                    isVisible={showModal}
                    onClose={() => setShowModal(false)} />
                </form>
            </div>
        </section>
    );
}

export default Reservation;
