import bg_hero from '../assets/img/Background.png';
import hero1 from '../assets/img/hero1.png';
import hero2 from '../assets/img/bruchetta.svg';
import MainButton from './MainButton';

const Hero = () => {
    return (
        <section id='hero' className="relative md:mt-[60px] w-screen h-screen">
            <img src={bg_hero} className='absolute md:top-[-220px] top-[-100px] left-0 w-full h-auto opacity-80 z-[-1]'/>
            <section className='flex flex-col md:flex-row gap-2'>
                <div className='flex flex-col md:text-6xl text-4xl font-bold font-Marzaki text-color-1 md:basis-6/12'>
                    <h2 className='md:text-right text-center md:pt-[80px]'>Italian Flavor</h2>
                    <h2 className='md:text-right text-center'>Exceptional Experience</h2>
                    <p className='font-Karla md:text-xl text-base font-semibold text-black text-center md:text-right md:px-0 md:pl-[30px] md:pt-[40px] px-3 my-8 md:mb-0'>Indulge in the rich flavors of Italy at our restaurant. Savor authentic Italian cuisine, handcrafted with passion, and enjoy a memorable dining experience with us.</p>
                    <div className='font-Karla flex flex-col md:flex-row gap-6 items-center justify-center text-base md:mt-[80px] mb-[30px]'>
                        <MainButton
                        bgcolor = "bg-color-2 hover:text-white hover:bg-color-1"
                        >Menu</MainButton>
                        <MainButton
                        bgcolor = "bg-color-3 hover:text-white hover:bg-color-1 hidden md:block"
                        >Reserve a Table</MainButton>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center md:basis-6/12'>
                    <img className='md:w-[400px] w-[300px] h-auto' src={hero1} alt='bg-image' />
                    <img className='absolute md:top-[52%] top-[80%] md:left-[50%] left-[17%] md:w-[300px] w-[250px] h-auto border-[6px] border-color-1 rounded-tl-[20px] rounded-tr-[60px] rounded-bl-[60px] rounded-br-[20px]' src={hero2} alt='bg-image2'/>
                </div>
            </section>
        </section>
    );
}

export default Hero;
