
const Modal = ({isVisible, onClose}) => {
    if(!isVisible) return;
    return (
        <div className="fixed z-30 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
            <div className="w-[300px] h-[350px] bg-color-1 p-5 rounded-lg flex flex-col justify-center items-center">
                <div className="text-color-2 text-2xl text-center font-semibold">Thanks for reserving with Us!</div>
                <textarea className="p-2 mt-5 rounded-md mx-10 w-[85%]" rows={5} placeholder="Aditional commets...">
                </textarea>
                <button onClick={() => onClose()} className="md:top-[80px] top-[215px] left-[32%] md:left-[39%] text-black shadow-md py-3 px-4 rounded-md font-semibold md:ml-3 md:w-[150px] md:h-[50px] bg-color-2 mt-5 hover:scale-110 transition-all duration-200">Send</button>
            </div>
        </div>
    );
}

export default Modal;
