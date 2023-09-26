import { useState } from "react";
import Modal from "./Modal";

const Reservation = () => {

    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(true);
    }

    return (
        <section className="w-full h-auto flex items-center justify-center pb-10">
            <div className="relative reservation-bg bg-cover bg-bottom md:w-[800px] md:h-[250px] w-[375px] h-[320px] rounded-2xl">
                <div className="absolute top-0 left-0 bg-color-1 rounded-2xl opacity-80 md:w-[800px] md:h-[250px] w-[375px] h-[320px] z-0"></div>
                <form className="w-full flex md:flex-row flex-col items-center justify-between gap absolute md:top-20 top-5 z-10 md:px-10">
                    <div className="flex flex-col items-center justify-center">
                        <label className="text-white font-bold text-lg">Name</label>
                        <input className="w-[200px] p-2 rounded-md border-2 border-color-2 focus:outline-none focus:ring-1 focus:ring-color-3" type="text" placeholder="Enter your name"/>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <label className="text-white font-bold text-lg">Date</label>
                        <input className="w-[200px] p-2 rounded-md border-2 border-color-2 focus:outline-none focus:ring-1 focus:ring-color-3 text-gray-400" type="date"/>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <label className="text-white font-bold text-lg">Time</label>
                        <input className="w-[200px] p-2 rounded-md border-2 border-color-2 focus:outline-none focus:ring-1 focus:ring-color-3 text-gray-400" type="time" />
                        <button onClick={handleSubmit} className="absolute md:top-[80px] top-[215px] left-[32%] md:left-[39%] text-black shadow-md py-3 px-4 rounded-md font-semibold md:ml-3 md:w-[150px] md:h-[50px] bg-color-2 mt-5 hover:scale-110 transition-all duration-200">Reserve Now</button>
                    </div>
                </form>
            </div>
            <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
        </section>
    );
}

export default Reservation;
