

const DishCards = ({ img, title, text }) => {
    return (
        <article className="relative bg-card-color w-[260px] h-[335px] rounded-tl-[20px] rounded-tr-[60px] rounded-bl-[60px] rounded-br-[20px] flex flex-col items-center justify-center mt-[80px] p-5 hover:bg-color-2 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out">
            <img className="absolute top-[-80px] left-[25px] w-[200px] h-auto" src={img} />
            <h2 className="mt-[80px] font-bold text-base">{title}</h2>
            <p className="text-sm">{text}</p>
        </article>
    );
}

export default DishCards;
