import dishes from "../data/Dishes";

const TextimonialsCard = ({name, image, content, cardStyle }) => {
    return (
        <section className="w-full h-[550px]">
            <div className={`${cardStyle} absolute bg-color-1 min-w-[350px] md:w-[700px] h-[450px] rounded-tl-[20px] rounded-tr-[60px] rounded-bl-[60px] rounded-br-[20px] flex flex-col items-center mt-[60px] p-5 transition-all duration-300 ease-in`}>
                <img src={image} alt={name} className="absolute top-[-20px] z-20 rounded-full border-4 border-color-2"/>
                <h2 className="text-[20px] md:text-[30px] md:mt-[120px] mt-[100px] text-white">{name}</h2>
                <p className="md:mt-[40px] mt-2 italic md:px-8 text-white">{content}</p>
                <div className="flex gap-10 text-color-2 text-2xl md:mt-10 mt-3">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                </div>
            </div>
        </section>
    );
}

export default TextimonialsCard;
